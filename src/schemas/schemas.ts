import * as yup from "yup";

const emailRegExp = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;

export const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().matches(emailRegExp, "Enter a valid Email").required(),
    phone: yup.string().matches(/^\+38\d{10}$/, "Invalid phone format"),
    avatar: yup.string().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, "Invalid format"),
  });

  export const schemaRegister = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().matches(emailRegExp, "Enter a valid Email").required(),
    password: yup.string().min(7).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required(),
  });

  export const schemaLogin = yup.object().shape({
    email: yup.string().matches(emailRegExp, "Enter a valid Email").required(),
    password: yup.string().min(7).required(),
  });