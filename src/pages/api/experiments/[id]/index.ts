import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { experimentValidationSchema } from 'validationSchema/experiments';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.experiment
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getExperimentById();
    case 'PUT':
      return updateExperimentById();
    case 'DELETE':
      return deleteExperimentById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getExperimentById() {
    const data = await prisma.experiment.findFirst(convertQueryToPrismaUtil(req.query, 'experiment'));
    return res.status(200).json(data);
  }

  async function updateExperimentById() {
    await experimentValidationSchema.validate(req.body);
    const data = await prisma.experiment.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteExperimentById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.experiment.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
