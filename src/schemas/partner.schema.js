import * as yup from "yup";

export const partnerSchema = yup.object().shape({
  Name: yup.string().required("Full Name is required"),
  Dob: yup
    .date()
    .required("Date of Birth is required")
    .typeError("Invalid Date"),
  Gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["Male", "Female", "Other"], "Invalid Gender"),
  Email: yup.string().email("Invalid Email").required("Email is required"),
  Phone: yup
    .string()
    .trim()
    .required("Whatsapp Number is required")
    .matches(/^[0-9]{10}$/, "Whatsapp Number must be exactly 10 digits"),
  Address: yup.string().required("Address is required"),
  Taluk: yup.string().required("Constituency/Taluk is required"),
  District: yup.string().required("District is required"),
  File: yup
    .mixed()
    .required("File is required")
    .test("fileType", "Only JPG, JPEG, PNG allowed", (value) => {
      if (!value || !value[0]) return false;
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      return allowedTypes.includes(value[0].type);
    })
    .test("fileSize", "File size must be less than 2MB", (value) => {
      if (!value || !value[0]) return false;
      return value[0].size <= 2 * 1024 * 1024;
    }),
});
