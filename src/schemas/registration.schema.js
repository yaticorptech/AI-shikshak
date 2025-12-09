import * as yup from "yup";

export const registrationschema = yup.object().shape({
  FirstName: yup
    .string()
    .required("Full Name is required")
    .matches(/^[A-Za-z\s]+$/, "Numbers or special characters not allowed"),
  Dob: yup
    .date()
    .required("Date of Birth is required")
    .typeError("Invalid Date"),
  Gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["Male", "Female", "Other"], "Invalid Gender"),
  Segment: yup.string().required("Segment is required"),
  Email: yup.string().email("Invalid Email").required("Email is required"),
  Phone: yup
    .string()
    .trim()
    .required("Whatsapp Number is required")
    .matches(/^[0-9]{10}$/, "Whatsapp Number must be exactly 10 digits"),
  Address: yup.string().required("Address is required"),
  Taluk: yup
    .string()
    .required("Taluk is required")
    .matches(/^[A-Za-z\s]+$/, "Numbers or special characters not allowed"),
  District: yup
    .string()
    .required("District is required")
    .matches(/^[A-Za-z\s]+$/, "Numbers or special characters not allowed"),
  State: yup
    .string()
    .required("State is required")
    .matches(/^[A-Za-z\s]+$/, "Numbers or special characters not allowed"),
  Pincode: yup
    .string()
    .trim()
    .required("Pincode is required")
    .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits"),
});
