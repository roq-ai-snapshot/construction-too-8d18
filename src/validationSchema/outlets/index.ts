import * as yup from 'yup';

export const outletValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  zip: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
