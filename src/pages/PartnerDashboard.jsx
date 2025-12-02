// src/pages/PartnerDashboard.jsx

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { partnerdashboardlogin } from "../Utils/authAPI";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PartnerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialMyArray = location.state?.myArray || {};
  const initialMyArrayData = initialMyArray.data || {};

  const [myArray, setMyArray] = useState(initialMyArray);
  const [myArray1, setMyArray1] = useState(initialMyArrayData);
  const [records, setRecords] = useState([]);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const dob = myArray1?.DOB || "";
  const formattedDob = dob ? dob.split("T")[0] : "";

  // Fetch Updated Data --------------------------
  const fetchData = async () => {
    if (!myArray1?.ID) {
      toast.warning("No user ID available to fetch data.");
      return;
    }

    try {
      setLoading(true);
      const res = await partnerdashboardlogin(myArray1.ID);

      const apiData = res?.data || res;
      const dataBlock = apiData?.data || apiData;

      if (!dataBlock) {
        toast.error("Unexpected API response");
        setLoading(false);
        return;
      }

      setMyArray(apiData);
      setMyArray1(dataBlock);
      setRecords(dataBlock.Records || []);

      toast.success("Successfully refreshed data");
      setLoading(false);
    } catch (err) {
      console.error("fetchData error:", err);
      toast.error("Server error while fetching dashboard.");
      setLoading(false);
    }
  };

  // Initialize ---------------------------------
  useEffect(() => {
    if (initialMyArrayData) {
      setMyArray(initialMyArray);
      setMyArray1(initialMyArrayData);
      setRecords(initialMyArrayData.Records || []);
    }
  }, []);

  useEffect(() => {
    if (myArray1?.Records) {
      setRecords(myArray1.Records);
    }
  }, [myArray1]);

  // Logout -------------------------------------
  const handleLogout = () => {
    setShowLogoutConfirm(false);
    navigate("/partnerlogin");
  };

  const latestRecord = records.length > 0 ? records[records.length - 1] : null;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <ToastContainer position="top-center" />

      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 pt-24">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back — view your profile and performance insights.
            </p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-4 mt-8">
        {/* Welcome */}
        <section className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600">
            Welcome, {myArray1?.Name || "User"}
          </h2>
          <p className="text-gray-500 mt-2">
            Empower your growth using
            <span className="font-semibold text-gray-700">
              {" "}
              real-time performance insights.
            </span>
          </p>
        </section>

        {/* Profile Card */}
        <section className="flex justify-center mb-8">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6">
            <div className="flex flex-col items-center">
              <div
                className="flex items-center justify-center rounded-full border-4 border-blue-200 bg-blue-50"
                style={{ width: 120, height: 120 }}
              >
                <span className="text-5xl font-bold text-blue-600">
                  {myArray1?.Name ? myArray1.Name.charAt(0).toUpperCase() : "U"}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {myArray1?.Name || "-"}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                ID: {myArray1?.ID || "-"}
              </p>
              <p className="text-sm text-gray-500">
                Group: {myArray1?.Group || "-"}
              </p>
              <p className="text-sm text-gray-500 mt-1 break-words">
                Email: {myArray1?.Email || "-"}
              </p>

              <hr className="w-full my-5 border-gray-100" />
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <Info label="Phone:" value={myArray1?.Phone} />
                <Info label="Gender:" value={myArray1?.Gender} />
                <Info label="Qualification:" value={myArray1?.Qualification} />
                <Info label="Date of Birth:" value={formattedDob} />
                <Info label="District:" value={myArray1?.District} />
                <Info label="Constituency:" value={myArray1?.Constituency} />
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setShowLogoutConfirm(true)}
                  className="px-4 py-2 rounded-full bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition"
                >
                  Logout
                </button>

                <button
                  onClick={fetchData}
                  className="px-4 py-2 rounded-full bg-blue-600 text-white hover:brightness-95 transition"
                  disabled={loading}
                >
                  {loading ? "Refreshing..." : "Refresh"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sales */}
        <section className="flex justify-center mb-8">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
            {latestRecord ? (
              <div className="flex items-center gap-6">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 font-semibold">
                    Checkout Your Sales
                  </p>
                  <p className="text-xs text-gray-500">
                    Today's insights help you grow. 🚀
                  </p>

                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-5xl font-extrabold text-gray-900">
                      {latestRecord.total}
                    </span>
                    <span className="text-sm text-green-600 font-semibold">
                      Pts
                    </span>
                  </div>
                </div>

                <img
                  src="/images/PER2.jpg"
                  className="w-28 h-28 rounded-lg object-cover shadow-inner"
                  alt="Sales"
                />
              </div>
            ) : (
              <p className="text-center text-gray-600 font-semibold">
                ⏳ Points yet to be given
              </p>
            )}
          </div>
        </section>

        {/* Performance Table */}
        <section className="mb-10">
          <div className="w-full bg-white rounded-2xl shadow-md">
            <div className="px-6 py-4 border-gray-100 border-b">
              <h3 className="text-lg font-semibold text-gray-800">
                📊 Performance Table
              </h3>
            </div>

            <div className="p-6">
              {latestRecord ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-100">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">
                          Metric
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">
                          Value
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {Object.keys(latestRecord.scores || {}).map(
                        (key, idx) => (
                          <tr key={idx}>
                            <td className="px-4 py-3 text-sm font-semibold text-gray-800">
                              {key}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {latestRecord.scores[key]}
                            </td>
                          </tr>
                        )
                      )}

                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-bold text-gray-900">
                          Total
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-gray-900">
                          {latestRecord.total}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center text-gray-500 font-semibold py-6">
                  No performance records yet.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Logout Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-xl p-6 shadow-lg">
            <h4 className="text-lg font-semibold">Confirm Logout</h4>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to logout?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Info Component
const Info = ({ label, value }) => (
  <div className="flex flex-row justify-left items-left w-full  p-2 rounded-lg">
    <span className="text-sm text-gray-600 font-medium">{label}</span>

    {/* Force value to stay in same line */}
    <span className="text-sm text-gray-900 font-semibold whitespace-nowrap">
      {value || "-"}
    </span>
  </div>
);

export default PartnerDashboard;
