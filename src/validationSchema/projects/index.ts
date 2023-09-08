import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  project_name: yup.string().required(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  status: yup.string().nullable(),
  client_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
