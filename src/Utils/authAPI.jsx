import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

export const partnerlogin = async (formData) => {
  const res = await axios.post(`${baseURL}/save-partner`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-api-key": apiKey,
      "x-api-secret": apiSecret,
    },
  });
  return res.data;
};
