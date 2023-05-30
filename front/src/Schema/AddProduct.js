import * as yup from "yup";

export const AddProduct = yup.object().shape({
  img: yup.string().required(),
  title: yup.string().required(),
  price: yup.number().required(),
});
