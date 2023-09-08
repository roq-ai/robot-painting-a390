import * as yup from 'yup';

export const experimentValidationSchema = yup.object().shape({
  experiment_name: yup.string().required(),
  experiment_date: yup.date().nullable(),
  results: yup.string().nullable(),
  project_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
