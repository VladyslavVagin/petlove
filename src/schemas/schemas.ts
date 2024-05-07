import * as yup from "yup";

const emailRegExp = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;
const urlRegExp = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/;

export const addPetSchema = yup.object().shape({
  title: yup.string().required(),
  name: yup.string().required(),
  imgUrl: yup.string().matches(urlRegExp, "Invalid format").required(),
  species: yup.string().required(),
  birthday: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid format").required(),
  sex: yup.string().required(),
});

export const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().matches(emailRegExp, "Enter a valid Email").required(),
  phone: yup.string().matches(/^\+38\d{10}$/, "Invalid phone format"),
  avatar: yup.string().matches(urlRegExp, "Invalid format"),
});

export const schemaRegister = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().matches(emailRegExp, "Enter a valid Email").required(),
  password: yup.string().min(7).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().matches(emailRegExp, "Enter a valid Email").required(),
  password: yup.string().min(7).required(),
});
