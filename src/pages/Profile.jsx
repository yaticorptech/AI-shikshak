import React, { useState } from "react";
import { FaCamera, FaHome } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { partnerdashboardlogin } from "../Utils/authAPI";
import { toast, ToastContainer } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  const [myArray, setMyArray] = useState(location.state?.myArray || {});
  const [myData, setMyData] = useState(myArray.data || {});
  const [records, setRecords] = useState(myData?.Records || []);
  const [data, setData] = useState([]);
  const [profilePic] = useState("/images/profile.jpg");

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);

  const dob = myData?.DOB || "";
  const formattedDob = dob ? dob.split("T")[0] : "";

  const generateChartData = (recordsArr) => {
    return recordsArr.map((r) => ({
      date: r.date,
      total: r.total,
    }));
  };

  const fetchData = async () => {
    try {
      const res = await partnerdashboardlogin(myData.Phone);
      const apiData = res.data;

      setMyArray(apiData);
      setMyData(apiData.data);

      const updatedRecords = apiData.data?.Records || [];
      setRecords(updatedRecords);
      setData(generateChartData(updatedRecords));

      toast.success("Profile refreshed!");
    } catch (err) {
      toast.error("Server error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/partnerlogin");
  };

  const selectedRecord = records[selectedDay] || {};
  const parameters = Object.keys(selectedRecord.scores || {});

  return (
    <div className="my-10 px-4 max-w-5xl mx-auto mt-20">
      <ToastContainer />

      {/* Profile Card */}
      <div className="flex justify-center mb-10">
        <div className="relative w-[450px] bg-white shadow-xl rounded-3xl p-6">
          {/* Dashboard Icon */}
          <div
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => navigate("/dashboard", { state: { myArray } })}
          >
            <FaHome size={34} className="text-blue-600" />
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-28 h-28 rounded-full border-4 border-blue-300 bg-blue-50 text-blue-600 text-6xl font-bold">
              {myData.FirstName?.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* User Name */}
          <h4 className="text-center font-bold text-xl text-gray-800 mt-3">
            {myData.FirstName}
          </h4>
          <p className="text-center text-gray-500 text-sm">{myData.Email}</p>

          <hr className="my-4" />

          <h6 className="text-center text-gray-700 mb-4 font-semibold">
            Personal Information
          </h6>

          <div className="text-gray-700 space-y-2 px-2">
            <p className="text-sm">
              <strong>📞 Phone:</strong>{" "}
              <span className="text-gray-600">{myData.Phone}</span>
            </p>

            <p className="text-sm">
              <strong>👤 Gender:</strong>{" "}
              <span className="text-gray-600">{myData.Gender}</span>
            </p>

            <p className="text-sm">
              <strong>🎓 Qualification:</strong>{" "}
              <span className="text-gray-600">{myData.Degree}</span>
            </p>

            <p className="text-sm">
              <strong>🎂 Date of Birth:</strong>{" "}
              <span className="text-gray-600">{formattedDob}</span>
            </p>

            <p className="text-sm">
              <strong>🏫 Institute:</strong>{" "}
              <span className="text-gray-600">{myData.Institute}</span>
            </p>

            <p className="text-sm">
              <strong>📅 Passing Year:</strong>{" "}
              <span className="text-gray-600">{myData.PassingYear}</span>
            </p>

            <p className="text-sm">
              <strong>🏠 Door No:</strong>{" "}
              <span className="text-gray-600">{myData.DoorNo}</span>
            </p>

            <p className="text-sm">
              <strong>📍 Address:</strong>{" "}
              <span className="text-gray-600">{myData.Address}</span>
            </p>

            <p className="text-sm">
              <strong>📮 Pincode:</strong>{" "}
              <span className="text-gray-600">{myData.Pincode}</span>
            </p>

            <p className="text-sm">
              <strong>🏞️ District:</strong>{" "}
              <span className="text-gray-600">{myData.District}</span>
            </p>

            <p className="text-sm">
              <strong>🗺️ Taluk:</strong>{" "}
              <span className="text-gray-600">{myData.Taluk}</span>
            </p>

            <p className="text-sm">
              <strong>🌐 State:</strong>{" "}
              <span className="text-gray-600">{myData.State}</span>
            </p>

            <p className="text-sm">
              <strong>🗳️ Constituency:</strong>{" "}
              <span className="text-gray-600">
                {myData.Constituency || "Not Available"}
              </span>
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                className="px-5 py-2 rounded-full border border-red-500 text-red-600 hover:bg-red-100 transition"
                onClick={() => setShowLogoutConfirm(true)}
              >
                Logout
              </button>

              <button
                className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                onClick={fetchData}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Score Card */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center bg-[#f9faff] rounded-3xl shadow-xl p-6 max-w-xl">
          <div className="flex-1">
            <p className="text-gray-700 font-semibold mb-1">
              Your Overall Performance
            </p>
            <p className="text-gray-500 text-sm mb-2">
              You’ve achieved a{" "}
              <span className="text-blue-600 font-bold">remarkable score</span>{" "}
              till date 🚀
            </p>

            <p className="text-gray-700">
              <span className="text-blue-600 font-bold text-6xl">
                {myData.Sold}
              </span>
              <span className="text-green-600 text-lg ml-2 font-semibold">
                Pts
              </span>
            </p>
          </div>

          <img
            src="/images/PER2.jpg"
            className="w-28 h-28 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Rewards */}
      {myData.Rewards > 0 && (
        <div className="flex justify-center mb-10">
          <div className="flex items-center rounded-3xl shadow-xl p-6 max-w-xl bg-gradient-to-br from-[#eef3ff] to-[#f9faff] border border-blue-100">
            <div className="flex-1">
              <p className="font-bold text-gray-700 mb-1">Congratulations 🎉</p>
              <p className="text-gray-500 text-sm mb-2">
                You reached a{" "}
                <span className="text-blue-600 font-bold">new milestone</span>.
              </p>

              <p>
                <span className="text-blue-600 font-bold text-6xl">
                  {myData.Rewards}
                </span>
                <span className="text-green-600 text-lg ml-2 font-semibold">
                  Pts
                </span>
              </p>
            </div>

            <img
              src="/images/Trophy.jpg"
              className="w-32 h-32 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      )}

      {/* Past Scores */}
      <div className="text-center">
        <h6 className="text-gray-600 mb-2">
          Access your{" "}
          <span className="text-blue-600 font-bold">Past Performance</span>
        </h6>

        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          onClick={() => setShowTable(!showTable)}
        >
          {showTable ? "Hide Past Scores" : "View Past Scores"}
        </button>

        {/* Dropdown + Table */}
        {showTable && records.length > 0 && (
          <div className="mt-6">
            <select
              className="border rounded px-3 py-2 mx-auto"
              value={selectedDay}
              onChange={(e) => setSelectedDay(Number(e.target.value))}
            >
              {records.map((_, idx) => (
                <option key={idx}>Day {idx + 1}</option>
              ))}
            </select>

            <div className="overflow-x-auto mt-4">
              <table className="w-full border shadow">
                <thead className="bg-blue-200">
                  <tr>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">
                      {new Date(selectedRecord.date).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {parameters.map((p, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="px-4 py-2 font-semibold">{p}</td>
                      <td className="px-4 py-2">
                        {selectedRecord.scores?.[p]}
                      </td>
                    </tr>
                  ))}

                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 font-bold">Total</td>
                    <td className="px-4 py-2">{selectedRecord.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Logout Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-3">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Stay
              </button>

              <button
                className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
