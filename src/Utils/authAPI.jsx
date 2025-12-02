import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

export const savePartnerInfo = async (formData) => {
  const res = await axios.post('http://localhost:443/v1/auth/save-partner', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-api-key": apiKey,
      "x-api-secret": apiSecret,
    },
  });
  return res.data;
};

export const partnerdashboardlogin = async (id) => {
  const response = await axios.get(
    `${baseURL}/trainee/${id}`,
    // { password: password },
    {
      headers: {
        "x-api-key": apiKey,
        "x-api-secret": apiSecret,
      },
    }
  );
  return response;
};
