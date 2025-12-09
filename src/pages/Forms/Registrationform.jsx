import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { registrationschema } from "../../schemas/registration.schema";
import { useNavigate } from "react-router-dom";
import Slider from "../../Components/UI/Slider";

const Registrationform = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationschema),
  });

  const segments = [
    "Student",
    "Parent",
    "Compete",
    "Business",
    "Professional",
    "Educate",
    "Trainers",
    "Marketing",
    "Sales",
    "Agriculture",
    "Finance",
    "Investment",
    "Employee",
    "Entertainment",
    "Journalist",
    "Logistics",
    "Content Creators",
    "Supply Chain",
    "Entrepreneurs",
    "Startups/Founders",
    "Healthcare",
    "Photographers",
    "Lawyers",
    "Designers",
    "Government Employee",
    "Construction",
    "Real Estate",
    "Social Media",
    "Cyber Security",
    "Civil",
    "Human Resource",
    "Hospitality",
  ];

  // successful submit handler
  const formSubmit = async (data) => {
    setLoading(true);
    try {
      // Convert form data to URL parameters
      const params = new URLSearchParams({
        FirstName: data.FirstName,
        Dob: data.Dob,
        Gender: data.Gender,
        Segment: data.Segment,
        Address: data.Address,
        Taluk: data.Taluk,
        District: data.District,
        State: data.State,
        Pincode: data.Pincode,
        Email: data.Email,
        Phone: data.Phone,
      }).toString();

      // Call Apps Script with GET
      const url = `https://script.google.com/macros/s/AKfycbxpEHz9EfoWJLciknMM3G7bTE7kUtQLC9DaiOQaavNZcNDFJQti_V0jruYZi3ClSlt7/exec?${params}`;
      const res = await axios.get(url);

      if (res.data.status === "success") {
        reset(); // clear the form
        navigate("/thankyou");
      } else {
        alert("Submission failed: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Network or server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // onError will show validation errors in console (useful while debugging)
  const onError = (formErrors) => {
    // show first error to user as alert while debugging (optional)
    const firstKey = Object.keys(formErrors)[0];
    if (firstKey) {
      const message = formErrors[firstKey].message;
      // small visible feedback
      // alert(message);
    }
  };

  // inline style for gradient text with webkit fallback for Safari
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(90deg,rgb(255, 94, 0) 0%,rgb(163, 186, 215) 50%, #0A8A2A 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white-200 py-12 px-4 min-h-screen">
      {/* TOP LOGO */}
      <div className="flex justify-center mt-10">
        <img
          src="/images/congresslogo.png"
          alt="Congress Logo"
          className="w-28 h-28 object-contain drop-shadow-lg"
        />
      </div>

      {/* Gradient text: using inline styles ensures Safari support */}
      <p
        style={gradientStyle}
        className="text-lg font-bold text-center leading-relaxed mt-4"
      >
        ಕೈ ಕೈ ಜೋಡಿಸಿ, AI ಕಲಿಯೋಣ; ನಾಳಿನ ಜಗತ್ತಿಗೆ KPCCಯ ಕೊಡುಗೆ
      </p>

      {/* MAIN LAYOUT */}
      <div className="max-w-10xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
        {/* LEFT LEADER PHOTO */}
        <div className="hidden lg:flex items-stretch justify-center">
          {" "}
          <img
            src="/images/leader1.JPG"
            alt="Leader"
            className="h-full w-200 rounded-xl shadow-2xl border-4 border-white object-cover"
          />{" "}
        </div>

        {/* CENTER FORM */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            National Youth AI Mission
          </h2>

          {/* onError passed so we can log validation issues */}
          <form
            onSubmit={handleSubmit(formSubmit, onError)}
            className="space-y-8"
          >
            {/* PERSONAL DETAILS */}
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Personal Details
              </h3>

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-semibold">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("FirstName")}
                    className="inputBox w-full border p-2 rounded"
                    placeholder="Enter full name"
                  />
                  {errors.FirstName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.FirstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="font-semibold">
                    Date of Birth <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("Dob")}
                    className="inputBox w-full border p-2 rounded"
                  />
                  {errors.Dob && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.Dob.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="font-semibold">
                    Gender <span className="text-red-600">*</span>
                  </label>
                  <select
                    {...register("Gender")}
                    className="inputBox w-full border p-2 rounded"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.Gender && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.Gender.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="font-semibold">
                    Segment <span className="text-red-600">*</span>
                  </label>
                  <select
                    {...register("Segment")}
                    className="inputBox w-full border p-2 rounded"
                  >
                    <option value="">Select Segment</option>
                    {segments.map((item) => (
                      <option key={item} value={`${item} - AI Course`}>
                        {item} - AI Course
                      </option>
                    ))}
                  </select>
                  {errors.Segment && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.Segment.message}
                    </p>
                  )}
                </div>
              </div>

              {/* ADDRESS */}
              <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">
                Address Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  {...register("Address")}
                  className="inputBox w-full border p-2 rounded"
                  placeholder="Address"
                />
                <input
                  type="text"
                  {...register("Taluk")}
                  className="inputBox w-full border p-2 rounded"
                  placeholder="Taluk / City"
                />
                <input
                  type="text"
                  {...register("District")}
                  className="inputBox w-full border p-2 rounded"
                  placeholder="District"
                />
                <input
                  type="text"
                  {...register("State")}
                  className="inputBox w-full border p-2 rounded"
                  placeholder="State"
                />
                <input
                  type="text"
                  {...register("Pincode")}
                  className="inputBox w-full border p-2 rounded"
                  placeholder="Pincode"
                />
              </div>

              {/* CONTACT DETAILS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="font-semibold">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("Email")}
                    className="inputBox w-full border p-2 rounded"
                    placeholder="Enter email"
                  />
                  {errors.Email && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.Email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="font-semibold">
                    Whatsapp Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("Phone")}
                    className="inputBox w-full border p-2 rounded"
                    placeholder="Enter Whatsapp number"
                  />
                  {errors.Phone && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.Phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* RIGHT LEADER IMAGE */}
        <div className="hidden lg:flex items-stretch justify-center">
          <img
            src="/images/leader3.JPG"
            alt="Leader"
            className="h-full w-[350px] rounded-xl shadow-2xl border-4 border-white object-cover"
          />
        </div>
      </div>

      <Slider />
    </div>
  );
};

export default Registrationform;
