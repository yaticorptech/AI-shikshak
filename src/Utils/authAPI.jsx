import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

export const savePartnerInfo = async (formData) => {
  const res = await axios.post(
    "https://illustrious-courtesy-testing.up.railway.app/v1/auth/save-partner",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": apiKey,
        "x-api-secret": apiSecret,
      },
    }
  );
  return res.data;
};

export const partnerdashboardlogin = async (number) => {
  const response = await axios.post(
    "https://illustrious-courtesy-testing.up.railway.app/v1/users/partner",
    {
      Phone: Number(number),
      Action: "getPartner",
    },
    {
      headers: {
        "x-api-key": apiKey,
        "x-api-secret": apiSecret,
      },
    }
  );
  return response;
};
