import React, { useState } from "react";
import { FaPhone, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { partnerdashboardlogin } from "../../Utils/authAPI";

function Partnerdashboardlogin() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await partnerdashboardlogin(number);
      console.log(response);

      if (response.status === 200) {
        toast.success("Login Successful");

        const myArray = response.data;
        localStorage.setItem("isLoggedIn", "true");

        navigate("/dashboard", { state: { myArray } });
      } else {
        toast.warning("Unable to login. Please try again.");
      }
    } catch (error) {
      const status = error?.response?.status;

      if (status === 401) toast.error("Password is not correct");
      else if (status === 404) toast.error("You have not registered");
      else toast.error("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <ToastContainer position="top-center" />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl"
      >
        {/* Title */}
        <h2 className="text-center text-xl font-bold mb-6 text-blue-600">
          PARTNER LOGIN
        </h2>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="font-semibold text-gray-700">
            Enter Phone Number
          </label>

          <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3 py-2">
            <FaPhone className="text-gray-500 text-lg" />
            <input
              id="phone"
              type="text"
              placeholder="Ex:1234567890"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="flex-1 bg-transparent outline-none ml-3 text-base"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="font-semibold text-gray-700">
            Enter Password
          </label>

          <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3 py-2">
            <FaLock className="text-gray-500 text-lg" />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-transparent outline-none ml-3 text-base"
              required
            />

            <span
              className="text-gray-600 text-lg cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold text-lg mt-2 active:scale-[0.98] transition-all"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Partnerdashboardlogin;
