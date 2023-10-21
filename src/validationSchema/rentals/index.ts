import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_start: yup.date().nullable(),
  rental_end: yup.date().nullable(),
  total_price: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
