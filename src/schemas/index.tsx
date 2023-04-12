import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(8)
    .required("Please enter your password")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
});

export const signupSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long!")
    .required("First Name is Required"),
  lastName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long!")
    .required("Last Name is Required"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(8)
    .required("Please enter your password")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  passwordConfirm: Yup.string()
    .required("Please retype Your password")
    .oneOf([Yup.ref("password")], "Your passwords do not match"),
});

export const forgetPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

export const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(8)
    .required("Please enter your password")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  passwordConfirm: Yup.string()
    .required("Please retype Your password")
    .oneOf([Yup.ref("password")], "Your passwords do not match"),
});
