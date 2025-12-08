import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Calculator from "../Components/Global/Calculator";

const PartnerDashboard = () => {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [myArray, setMyArray] = useState(location.state?.myArray || {});
  const [myArray1, setMyArray1] = useState(myArray.data || {});

  const generateChartData = (recordsList) => {
    if (!recordsList || recordsList.length === 0) return [];
    const latest = recordsList[recordsList.length - 1];
    return Object.entries(latest.scores).map(([label, points]) => ({
      day: label,
      points: points,
    }));
  };

  useEffect(() => {
    if (myArray1.Records) {
      setRecords(myArray1.Records);
      setData(generateChartData(myArray1.Records));
    }
  }, [myArray1]);

  // ⭐ ACHIEVEMENT MESSAGE LOGIC
  const getAchievement = (sold) => {
    if (!sold && sold == 0)
      return "🌱 Every big journey starts with a small step — your success story is just beginning. Keep going!";
    if (sold >= 300) return "🎉 Top tier unlocked — ₹200 per registration!";
    if (sold >= 200) return "🔥 You've reached ₹175 per registration!";
    if (sold >= 100) return "🚀 You've reached ₹150 per registration!";
    if (sold >= 50) return "💥 You've reached ₹125 per registration!";
    if (sold >= 25)
      return "⭐ You're now eligible to earn ₹100 per registration!";
    return null;
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

      {/* ⭐ ACHIEVEMENT CARD (Separate from Performance Table) */}
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

      {/* Calculator Component */}
      <Calculator state={myArray1.Sold}/>

      {/* Performance Table */}
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 mt-10 mb-40">
        <div className="bg-blue-600 text-white px-6 py-3 rounded-t-2xl">
          <h3 className="text-lg font-semibold">📊 Performance Table</h3>
        </div>

        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold">{myArray1.Sold}</h2>

          {/* Tier Progress Messages */}
          {myArray1.Sold !== undefined && myArray1.Sold !== null ? (
            <p className="py-4 px-4 font-semibold text-blue-700">
              {myArray1.Sold < 25 ? (
                <>
                  ⚡ You need <b>{25 - myArray1.Sold}</b> registration to start
                  earning.
                </>
              ) : myArray1.Sold < 50 ? (
                <>
                  🔥 <b>{50 - myArray1.Sold}</b> more to reach
                  ₹125/registration.
                </>
              ) : myArray1.Sold < 100 ? (
                <>
                  🚀 <b>{100 - myArray1.Sold}</b> more to reach
                  ₹150/registration.
                </>
              ) : myArray1.Sold < 200 ? (
                <>
                  ⚡ <b>{200 - myArray1.Sold}</b> more to reach
                  ₹175/registration.
                </>
              ) : myArray1.Sold < 300 ? (
                <>
                  🔥 <b>{300 - myArray1.Sold}</b> more to reach
                  ₹200/registration.
                </>
              ) : (
                <>🎉 Maximum rate achieved! You're earning ₹200/registration!</>
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
