import * as yup from "yup";

export const partnerSchema = yup.object().shape({
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
  Pan: yup
    .string()
    .transform((value) => value?.toUpperCase())
    .matches(
      /^[A-Za-z\s]{5}[0-9]{4}[A-Za-z/s]$/,
      "Please enter valid PAN number."
    )
    .required("PAN is required"),
  AadhaarFile: yup
    .mixed()
    .required("Aadhaar File is required")
    .test("fileType", "Only JPG, JPEG, PNG, PDF allowed", (value) => {
      if (!value || !value[0]) return false;
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/pdf",
      ];
      return allowedTypes.includes(value[0].type);
    })
    .test("fileSize", "File size must be less than 4MB", (value) => {
      if (!value || !value[0]) return false;
      return value[0].size <= 4 * 1024 * 1024;
    }),
  Aadhaar: yup
    .string()
    .trim()
    .required("Aadhaar Card Number is required")
    .matches(/^[0-9]{12}$/, "Please enter valid Aadhaar number."),
  Degree: yup.string().required("Qualification is required"),
  Institute: yup
    .string()
    .required("Institute is required")
    .matches(/^[A-Za-z\s]+$/, "Numbers or special characters not allowed"),
  PassingYear: yup
    .string()
    .required("Year of passing is required")
    .matches(/^[0-9]{4}$/, "Please enter valid year format.")
    .test(
      "year-range",
      `Year cannot be greater than ${new Date().getFullYear()}`,
      (value) => {
        const year = Number(value);
        return year <= new Date().getFullYear();
      }
    ),
});
