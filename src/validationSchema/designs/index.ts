import * as yup from 'yup';

export const designValidationSchema = yup.object().shape({
  design_name: yup.string().required(),
  creation_date: yup.date().nullable(),
  modification_date: yup.date().nullable(),
  status: yup.string().nullable(),
  experiment_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
