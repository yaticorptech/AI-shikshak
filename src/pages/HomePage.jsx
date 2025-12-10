import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { savePartnerInfo } from "../Utils/authAPI";
import { yupResolver } from "@hookform/resolvers/yup";
import { partnerSchema } from "../schemas/partner.schema";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(partnerSchema),
  });

  const navigate = useNavigate();
  const [section, setSection] = useState(0);

  const handleNext = async (fields) => {
    const valid = await trigger(fields);
    if (!valid) return;
    setSection((prev) => prev + 1);
  };

  const formSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key] instanceof FileList) {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });
    const res = savePartnerInfo(formData);
    navigate("/agreement", { state: data });
    reset();
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white mt-20 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Partner Onboarding Form
        </h2>

        <form
          onSubmit={handleSubmit(formSubmit)}
          encType="multipart/form-data"
          className="space-y-10"
        >
          {/* -------------------- SECTION 0 - PERSONAL -------------------- */}
          {section === 0 && (
            <>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Personal Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <label className="font-semibold">
                      First Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("FirstName")}
                      className="inputBox"
                      placeholder="Enter first name"
                    />
                    {errors.FirstName && (
                      <p className="errorText">{errors.FirstName.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold">Middle Name</label>
                    <input
                      type="text"
                      {...register("Middle")}
                      className="inputBox"
                      placeholder="Enter middle name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold">Last Name</label>
                    <input
                      type="text"
                      {...register("Last")}
                      className="inputBox"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-1">
                    <label className="font-semibold">
                      Date of Birth<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("Dob")}
                      className="inputBox"
                    />
                    {errors.Dob && (
                      <p className="errorText">{errors.Dob.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold">
                      Gender<span className="text-red-600">*</span>
                    </label>
                    <select {...register("Gender")} className="inputBox">
                      <option value="">Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    {errors.Gender && (
                      <p className="errorText">{errors.Gender.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-1">
                    <label className="font-semibold">
                      Email<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("Email")}
                      className="inputBox"
                      placeholder="Enter email"
                    />
                    {errors.Email && (
                      <p className="errorText">{errors.Email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold">
                      Whatsapp Number<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("Phone")}
                      className="inputBox"
                      placeholder="Enter Whatsapp number"
                    />
                    {errors.Phone && (
                      <p className="errorText">{errors.Phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleNext(["FirstName", "Dob", "Gender", "Email", "Phone"])
                }
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Next
              </button>
            </>
          )}

          {/* -------------------- SECTION 1 - ADDRESS -------------------- */}
          {section === 1 && (
            <>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Address Details
                </h3>

                <div className="space-y-1">
                  <label className="font-semibold">
                    Address Line 1<span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows="2"
                    {...register("Address")}
                    className="inputBox"
                    placeholder="Enter address"
                  ></textarea>
                  {errors.Address && (
                    <p className="errorText">{errors.Address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="font-semibold">Door No.</label>
                    <input
                      type="text"
                      {...register("DoorNo")}
                      className="inputBox"
                      placeholder="Enter Door No"
                    />
                  </div>

                  <div>
                    <label className="font-semibold">
                      Pincode<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("Pincode")}
                      className="inputBox"
                      placeholder="Enter Pincode"
                    />
                    {errors.Pincode && (
                      <p className="errorText">{errors.Pincode.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="font-semibold">
                      Taluk<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("Taluk")}
                      className="inputBox"
                      placeholder="Enter Taluk"
                    />
                    {errors.Taluk && (
                      <p className="errorText">{errors.Taluk.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-semibold">
                      District<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("District")}
                      className="inputBox"
                      placeholder="Enter District"
                    />
                    {errors.District && (
                      <p className="errorText">{errors.District.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-semibold">
                      State<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("State")}
                      className="inputBox"
                      placeholder="Enter State"
                    />
                    {errors.State && (
                      <p className="errorText">{errors.State.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setSection((p) => p - 1)}
                  className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold"
                >
                  Prev
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleNext([
                      "Address",
                      "Pincode",
                      "Taluk",
                      "District",
                      "State",
                    ])
                  }
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* -------------------- SECTION 2 - ID + FILE -------------------- */}
          {section === 2 && (
            <>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Identification
                </h3>

                <div className="space-y-1">
                  <label className="font-semibold">
                    Aadhaar Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("Aadhaar")}
                    className="inputBox"
                    placeholder="Enter Aadhaar number"
                  />
                  {errors.Aadhaar && (
                    <p className="errorText">{errors.Aadhaar.message}</p>
                  )}
                </div>

                <div className="space-y-1 mt-6">
                  <label className="font-semibold">PAN Number</label>
                  <input
                    type="text"
                    {...register("Pan")}
                    className="inputBox"
                    placeholder="Enter PAN number"
                  />
                  {errors.Pan && (
                    <p className="errorText">{errors.Pan.message}</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Documents
                </h3>

                <div className="space-y-1">
                  <label className="font-semibold">
                    Passport Size Photo (Less than 2MB)
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("File")}
                    className="inputBox bg-white"
                    accept=".jpg,.jpeg,.png"
                  />
                  {errors.File && (
                    <p className="errorText">{errors.File.message}</p>
                  )}
                </div>

                <div className="space-y-1 mt-6">
                  <label className="font-semibold">
                    Aadhaar Card (Less than 4MB)
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="file"
                    {...register("AadhaarFile")}
                    className="inputBox bg-white"
                    accept=".jpg,.jpeg,.png,.pdf"
                  />
                  {errors.AadhaarFile && (
                    <p className="errorText">{errors.AadhaarFile.message}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setSection((p) => p - 1)}
                  className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold"
                >
                  Prev
                </button>

                <button
                  type="button"
                  onClick={() => handleNext(["Aadhaar", "Pan", "File"])}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* -------------------- SECTION 3 - EDUCATION -------------------- */}
          {section === 3 && (
            <>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Educational Qualifications
                </h3>

                <div className="space-y-1">
                  <label className="font-semibold">
                    Highest Qualification<span className="text-red-600">*</span>
                  </label>
                  <select {...register("Degree")} className="inputBox">
                    <option value="">Select an option</option>
                    <option>Below SSLC</option>
                    <option>SSLC</option>
                    <option>PUC / 10 + 2</option>
                    <option>BCOM</option>
                    <option>BBA</option>
                    <option>BCA</option>
                    <option>BSC</option>
                    <option>BVOC</option>
                    <option>BE</option>
                    <option>MCA</option>
                    <option>MCOM</option>
                    <option>MSC</option>
                    <option>M.Tech</option>
                  </select>
                  {errors.Degree && (
                    <p className="errorText">{errors.Degree.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-1">
                    <label className="font-semibold">
                      Institute Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("Institute")}
                      className="inputBox"
                      placeholder="Enter institution name"
                    />
                    {errors.Institute && (
                      <p className="errorText">{errors.Institute.message}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold">
                      Year of Passing<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("PassingYear")}
                      className="inputBox"
                      placeholder="Enter year"
                    />
                    {errors.PassingYear && (
                      <p className="errorText">{errors.PassingYear.message}</p>
                    )}
                  </div>

                  {/* Referral Code */}
                   <div className="space-y-1">
                    <label className="font-semibold">
                      Referral Code
                    </label>
                    <input
                      type="text"
                      {...register("ReferralId")}
                      className="inputBox"
                      placeholder="Enter Referral Code"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setSection((p) => p - 1)}
                  className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold"
                >
                  Prev
                </button>

                <button
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default HomePage;
