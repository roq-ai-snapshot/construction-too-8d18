import * as yup from 'yup';

export const salesValidationSchema = yup.object().shape({
  quantity: yup.number().integer().nullable(),
  total_price: yup.number().integer().nullable(),
  sale_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
