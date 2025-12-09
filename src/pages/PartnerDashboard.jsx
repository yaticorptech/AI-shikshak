import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Calculator from "../Components/Global/Calculator";

// Small reusable info component
const Info = ({ label, value }) => (
  <p className="text-sm text-gray-700">
    <span className="font-semibold">{label}</span> {value || "-"}
  </p>
);

const PartnerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const myArray = location.state?.myArray || {};
  const myArray1 = myArray.data || {};

  const [records, setRecords] = useState([]);
  const [data, setData] = useState([]);

  const formattedDob = myArray1.DOB
    ? new Date(myArray1.DOB).toLocaleDateString()
    : "-";

  const latestRecord =
    records && records.length > 0 ? records[records.length - 1] : null;

  const generateChartData = (recordsList) => {
    if (!recordsList?.length) return [];
    const latest = recordsList[recordsList.length - 1];
    return Object.entries(latest.scores || {}).map(([label, points]) => ({
      day: label,
      points,
    }));
  };

  useEffect(() => {
    if (myArray1.Records) {
      setRecords(myArray1.Records);
      setData(generateChartData(myArray1.Records));
    }
  }, [myArray1]);

  // ⭐ Achievement Message Logic
  const getAchievement = (sold) => {
    if (!sold || sold === 0)
      return "🌱 Every big journey starts with a small step — keep going!";
    if (sold >= 300) return "🎉 Top tier unlocked — ₹200 per registration!";
    if (sold >= 200) return "🔥 You've reached ₹175 per registration!";
    if (sold >= 100) return "🚀 You've reached ₹150 per registration!";
    if (sold >= 50) return "💥 You've reached ₹125 per registration!";
    if (sold >= 25) return "⭐ You're now eligible for ₹100 per registration!";
    return null;
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-6 mt-20">
      {/* Profile Icon */}
      <div
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => navigate("/profile", { state: { myArray } })}
        title="Profile"
      >
        <FaUserCircle size={45} className="text-blue-600 hover:text-blue-800" />
      </div>

      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10">Dashboard</h2>

      {/* Welcome Section */}
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold text-blue-700">
          Welcome, {myArray1.FirstName} {myArray1.Middle} {myArray1.Last}
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Empower your growth using{" "}
          <span className="font-semibold text-blue-600">
            real-time performance insights
          </span>{" "}
          to improve your skills and achieve success 🚀
        </p>
      </div>

      {/* ⭐ Achievement Card */}
      {getAchievement(myArray1.Sold) && (
        <div className="bg-green-100 border border-green-300 p-5 rounded-xl shadow-md mb-8 text-center animate-pulse">
          <h3 className="text-xl font-bold text-green-700">
            🎉 Congratulations!
          </h3>
          <p className="text-green-800 mt-1 font-semibold">
            {getAchievement(myArray1.Sold)}
          </p>
        </div>
      )}

      {/* Profile Card */}
      <section className="flex justify-center mb-8">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-col items-center">
            <div
              className="flex items-center justify-center rounded-full border-4 border-blue-200 bg-blue-50"
              style={{ width: 120, height: 120 }}
            >
              <span className="text-5xl font-bold text-blue-600">
                {myArray1?.FirstName
                  ? myArray1.FirstName.charAt(0).toUpperCase()
                  : "U"}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {myArray1?.FirstName || "-"}
            </h3>

            <p className="text-sm text-gray-500 mt-1 break-words">
              Email: {myArray1?.Email || "-"}
            </p>

            <hr className="w-full my-5 border-gray-100" />

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <Info label="Phone:" value={myArray1.Phone} />
              <Info label="Gender:" value={myArray1.Gender} />
              <Info label="Qualification:" value={myArray1.Degree} />
              <Info label="Date of Birth:" value={formattedDob} />
              <Info label="District:" value={myArray1.District} />
              <Info label="Constituency:" value={myArray1.Taluk} />
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="px-4 py-2 rounded-full bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Section */}
      <section className="flex justify-center mb-8">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
          {myArray1.Sold ? (
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
                    {myArray1.Sold}
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
              ⏳ No sale recorded yet!
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
                    {Object.keys(latestRecord.scores || {}).map((key, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-800">
                          {key}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {latestRecord.scores[key]}
                        </td>
                      </tr>
                    ))}

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

      {/* Calculator */}
      <Calculator state={myArray1.Sold} />

      {/* Earnings / Tier Progress */}
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 mt-10 mb-40">
        <div className="bg-blue-600 text-white px-6 py-3 rounded-t-2xl">
          <h3 className="text-lg font-semibold">📊 Performance</h3>
        </div>

        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold">{myArray1.Sold}</h2>

          {myArray1.Sold !== undefined ? (
            <p className="py-4 px-4 font-semibold text-blue-700">
              {myArray1.Sold < 25 ? (
                <>⚡ {25 - myArray1.Sold} more to start earning.</>
              ) : myArray1.Sold < 50 ? (
                <>🔥 {50 - myArray1.Sold} more to reach ₹125.</>
              ) : myArray1.Sold < 100 ? (
                <>🚀 {100 - myArray1.Sold} more to reach ₹150.</>
              ) : myArray1.Sold < 200 ? (
                <>⚡ {200 - myArray1.Sold} more to reach ₹175.</>
              ) : myArray1.Sold < 300 ? (
                <>🔥 {300 - myArray1.Sold} more to reach ₹200.</>
              ) : (
                <>🎉 Maximum rate achieved — ₹200/registration!</>
              )}
            </p>
          ) : (
            <p className="text-center text-gray-500 font-semibold py-4">
              ⏳ Earnings not started yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
