import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { partnerSchema } from "../schemas/partner.schema";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(partnerSchema),
  });

  const navigate = useNavigate();

  const formSubmit = async (data) => {
    const formData = new FormData();

    // Append all text fields
    Object.keys(data).forEach((key) => {
      if (key !== "File") {
        formData.append(key, data[key]);
      }
    });

    // Append file
    if (data.File && data.File[0]) {
      formData.append("File", data.File[0]);
    }
    // console.log("file:", data.File[0]);

    // const res = await axios.post(
    //   "http://192.168.0.192:443/v1/auth/save-partner",
    //   formData,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       "x-api-key": "hvyluf8760cgc57jhvb90",
    //       "x-api-secret": "29wgo79ujk30gy53fj1",
    //     },
    //   }
    // );

    // console.log(res);
    navigate("/agreement", { state: data });
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
        <h1 className="text-xl font-bold text-blue-600">AI-Shikshak</h1>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">
            <a
              href="https://www.yaticorp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a
              href="https://www.yaticorp.com/AI-Shikshak"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Product
            </a>
          </li>
        </ul>
      </nav>

      {/* FORM CONTAINER */}
      <div className="pt-28 pb-16 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          {/* TITLE */}
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Partner Onboarding Form
          </h2>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                {...register("Name")}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.Name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Name.message}
                </p>
              )}
            </div>

            {/* DOB */}
            <div>
              <label className="block font-semibold mb-1">Date of Birth</label>
              <input
                type="date"
                {...register("Dob")}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.Dob && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Dob.message}
                </p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block font-semibold mb-1">Gender</label>
              <select
                {...register("Gender")}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.Gender && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Gender.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="text"
                {...register("Email")}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.Email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Email.message}
                </p>
              )}
            </div>

            {/* Whatsapp Number */}
            <div>
              <label className="block font-semibold mb-1">
                Whatsapp Number
              </label>
              <input
                type="text"
                {...register("Phone")}
                placeholder="Enter whatsapp number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.Phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Phone.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold mb-1">Address</label>
              <textarea
                rows="3"
                placeholder="Enter your full residential address"
                {...register("Address")}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              {errors.Address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Address.message}
                </p>
              )}
            </div>

            {/* Constituecy / Taluk */}
            <div>
              <label className="block font-semibold mb-1">
                Constituency / Taluk
              </label>
              <input
                type="text"
                placeholder="Enter your Taluk"
                {...register("Taluk")}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.Taluk && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Taluk.message}
                </p>
              )}
            </div>

            {/* District */}
            <div>
              <label className="block font-semibold mb-1">District</label>
              <input
                type="text"
                placeholder="Enter your district"
                {...register("District")}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.District && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.District.message}
                </p>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label className="block font-semibold mb-1">Upload Photo</label>
              <input
                type="file"
                {...register("File")}
                className="w-full border p-2 rounded-lg bg-white"
              />
              {errors.File && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.File.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
