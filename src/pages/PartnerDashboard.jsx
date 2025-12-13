import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
  FaLock,
  FaUserFriends,
  FaRupeeSign,
  FaChartBar,
  FaBullseye,
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
  FaIdCard,
  FaBars,
} from "react-icons/fa";
import Calculator from "../Components/Global/Calculator";

const PartnerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const myArray = location.state?.myArray || {};
  const myArray1 = myArray.data || {};

  const [users, setUsers] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [totalIncentives, setTotalIncentives] = useState(0);
  const [stats, setStats] = useState({
    totalReferrals: 0,
    unlockedReferrals: 0,
    pendingReferrals: 0,
  });
  // Process referrals from API data
  const processReferrals = () => {
    if (myArray1.Referrals && myArray1.Referrals.length > 0) {
      const processedReferrals = myArray1.Referrals.map((referral) => {
        const registrationsDone = referral.Sold || 0;
        const registrationsRemaining =
          registrationsDone >= 25 ? 0 : Math.max(0, 25 - registrationsDone);
        const isUnlocked = registrationsDone >= 25;
        const incentiveEarned = isUnlocked ? 1000 : 0;

        return {
          _id: referral._id,
          name: `${referral.FirstName} ${referral.Middle || ""} ${
            referral.Last || ""
          }`.trim(),
          phone: referral.Phone || "",
          partnerId: referral.PartnerId || "",
          registrationsDone,
          registrationsRemaining,
          isUnlocked,
          incentiveEarned,
        };
      });

      setReferrals(processedReferrals);

      const total = processedReferrals.reduce(
        (sum, ref) => sum + ref.incentiveEarned,
        0
      );
      setTotalIncentives(total);

      setStats({
        totalReferrals: processedReferrals.length,
        unlockedReferrals: processedReferrals.filter((r) => r.isUnlocked)
          .length,
        pendingReferrals: processedReferrals.filter((r) => !r.isUnlocked)
          .length,
      });
    } else {
      setReferrals([]);
      setTotalIncentives(0);
      setStats({
        totalReferrals: 0,
        unlockedReferrals: 0,
        pendingReferrals: 0,
      });
    }
  };

  useEffect(() => {
    if (myArray1.Users) {
      setUsers(myArray1.Users);
    } else if (myArray1.Records) {
      setUsers(myArray1.Records);
    }

    if (myArray1.Referrals) {
      processReferrals();
    }
  }, [myArray1]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && window.innerWidth < 768) {
        const sidebar = document.querySelector(".mobile-sidebar");
        if (sidebar && !sidebar.contains(event.target)) {
          setIsSidebarOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSidebarOpen]);

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

  const calculateCommission = () => {
    const sold = myArray1.Sold || 0;
    let rate = 0;

    if (sold >= 300) rate = 200;
    else if (sold >= 200) rate = 175;
    else if (sold >= 100) rate = 150;
    else if (sold >= 50) rate = 125;
    else if (sold >= 25) rate = 100;

    return { sold, rate, commission: sold * rate };
  };

  const { sold, rate, commission } = calculateCommission();

  const renderUnlockStatus = (referral) => {
    if (referral.isUnlocked) {
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <FaCheckCircle className="text-sm md:text-xl text-green-500 mr-2" />
            <span className="text-xs md:text-sm font-semibold text-green-600">
              Unlocked
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <FaLock className="text-sm md:text-xl text-gray-400 mr-2" />
            <span className="text-xs md:text-sm font-semibold text-gray-500">
              Locked
            </span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {referral.registrationsRemaining} more
          </div>
        </div>
      );
    }
  };

  const renderRegistrationProgress = (referral) => {
    const percentage = Math.min((referral.registrationsDone / 25) * 100, 100);
    const registrationsText =
      referral.registrationsDone >= 25
        ? "25+ done"
        : `${referral.registrationsDone} done`;

    return (
      <div className="w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between text-xs mb-1 gap-1">
          <span className="font-semibold text-blue-600">
            {registrationsText}
          </span>
          {!referral.isUnlocked && referral.registrationsRemaining > 0 && (
            <span className="font-semibold text-red-500">
              {referral.registrationsRemaining} remaining
            </span>
          )}
          {referral.isUnlocked && (
            <span className="font-semibold text-green-600">
              Target Achieved!
            </span>
          )}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              referral.isUnlocked ? "bg-green-500" : "bg-blue-600"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        {!referral.isUnlocked && referral.registrationsRemaining > 0 && (
          <div className="text-xs text-gray-500 mt-1">
            {referral.registrationsRemaining} more to unlock ₹1000
          </div>
        )}
        {referral.isUnlocked && (
          <div className="text-xs text-green-600 mt-1 flex items-center">
            <FaCheckCircle className="mr-1 text-xs" />
            ₹1000 incentive earned
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-16 flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <FaBars className="text-xl text-gray-700" />
          </button>

          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600 ml-2 md:ml-0">
              AI Shikshak
            </h1>
            <span className="ml-2 text-sm text-gray-500 hidden sm:inline">
              Partner Dashboard
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate("/profile", { state: { myArray } })}
              className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600"
            >
              <FaUserCircle className="mr-2" />
              Profile
            </button>
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
            >
              Logout
            </button>
          </div>

          {/* Mobile Profile Button */}
          <div className="md:hidden">
            <button
              onClick={() => navigate("/profile", { state: { myArray } })}
              className="p-2"
            >
              <FaUserCircle className="text-2xl text-blue-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="mobile-sidebar fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-xl z-40 md:hidden transform transition-transform duration-300">
            <div className="p-4">
              <div className="p-4 bg-blue-50 rounded-lg mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="font-bold text-blue-600">
                      {myArray1?.FirstName?.charAt(0)?.toUpperCase() || "P"}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm truncate">
                      {myArray1.FirstName || "Partner"}
                    </p>
                    <p className="text-xs text-gray-500">Partner</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate("/profile", { state: { myArray } });
                  setIsSidebarOpen(false);
                }}
                className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg mb-2"
              >
                <FaUserCircle className="mr-3" />
                My Profile
              </button>
              <button
                onClick={() => {
                  setShowLogoutConfirm(true);
                  setIsSidebarOpen(false);
                }}
                className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <FaUserCircle className="mr-3" />
                Logout
              </button>
            </div>
          </div>
        </>
      )}

      {/* Main Content - Adjusted for fixed navbar */}
      <div className="pt-16 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-4 md:py-6 lg:py-8">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Welcome,{" "}
              <span className="text-blue-600">
                {myArray1.FirstName || "Partner"}
              </span>
              !
            </h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              AI Shikshak Partner Dashboard - Track your performance and
              earnings
            </p>
          </div>

          {/* Achievement Card */}
          {getAchievement(myArray1.Sold) && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 p-4 md:p-5 rounded-xl mb-6 md:mb-8 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg sm:text-xl">🏆</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-800">
                  Achievement Unlocked!
                </h3>
              </div>
              <p className="text-green-700 font-semibold text-sm sm:text-base md:text-lg">
                {getAchievement(myArray1.Sold)}
              </p>
            </div>
          )}

          {/* 1. PROFILE + EARNINGS */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4 flex items-center">
                <FaUserCircle className="mr-2 text-blue-600" />
                Profile Overview
              </h3>

              <div className="flex flex-col items-center">
                <div className="mb-4 md:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 md:border-4 border-white shadow-md bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                      {myArray1?.FirstName?.charAt(0)?.toUpperCase() || "P"}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 md:mb-2 text-center">
                  {myArray1.FirstName || "Partner"} {myArray1.Middle}{" "}
                  {myArray1.Last}
                </h3>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4 md:mb-6">
                  Partner ID: {myArray1.PartnerId || "N/A"}
                </div>

                <div className="w-full space-y-3 md:space-y-4">
                  <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <FaEnvelope className="text-blue-600 text-sm sm:text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-500">Email</p>
                      <p className="text-gray-800 font-medium text-sm sm:text-base truncate">
                        {myArray1.Email || "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <FaPhone className="text-green-600 text-sm sm:text-base" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800 font-medium text-sm sm:text-base">
                        {myArray1.Phone || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Earnings Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4 flex items-center">
                <FaRupeeSign className="mr-2 text-green-600" />
                Earnings Summary
              </h3>

              <div className="space-y-4 md:space-y-6">
                {/* Sales Commission */}
                <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2 gap-1">
                    <span className="text-gray-700 text-sm sm:text-base">
                      Sales Commission
                    </span>
                    <span className="font-semibold text-blue-600 text-sm sm:text-base">
                      ₹{rate}/registration
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-800">
                        {sold}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Registrations
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">
                        ₹{commission}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Earnings
                      </p>
                    </div>
                  </div>
                </div>

                {/* Referral Incentives */}
                <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2 gap-1">
                    <span className="text-gray-700 text-sm sm:text-base">
                      Referral Incentives
                    </span>
                    <span className="font-semibold text-green-600 text-sm sm:text-base">
                      ₹1000 per referral
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-800">
                        {stats.unlockedReferrals}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Unlocked
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl sm:text-2xl font-bold text-green-600">
                        ₹{totalIncentives}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">Earned</p>
                    </div>
                  </div>
                </div>

                {/* Total Earnings */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-center">
                  <p className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                    Total Earnings
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    ₹{commission + totalIncentives}
                  </h2>
                  <p className="text-blue-200 text-xs sm:text-sm mt-1 sm:mt-2">
                    (Sales: ₹{commission} + Referrals: ₹{totalIncentives})
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. PERFORMANCE TABLE */}
          <section className="mb-6 md:mb-8">
            <div className="w-full bg-white rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-gray-200">
              <div className="px-4 py-3 sm:px-6 sm:py-4 border-gray-100 border-b">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center">
                  <span className="mr-2">📊</span>
                  Performance Table
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  Student registrations and their status
                </p>
              </div>

              <div className="p-4 sm:p-6">
                {users && users.length > 0 ? (
                  <div className="overflow-x-auto -mx-2 sm:mx-0">
                    <div className="min-w-full inline-block align-middle">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                              Name
                            </th>
                            <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                              Phone No
                            </th>
                            <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                              Class
                            </th>
                            <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                              Payment Status
                            </th>
                            <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                              Date
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                          {users.map((user, idx) => (
                            <tr
                              key={user._id || idx}
                              className="hover:bg-gray-50"
                            >
                              <td className="px-3 py-2 sm:px-4 sm:py-3">
                                <div className="text-sm font-semibold text-gray-800">
                                  {user.Name || "N/A"}
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-3">
                                <div className="flex items-center text-sm text-gray-700">
                                  <FaPhone className="mr-2 text-gray-400 text-xs" />
                                  {user.Phone || "N/A"}
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-3">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {user.Class || "N/A"}
                                </span>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-3">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    user.Status === "paid"
                                      ? "bg-green-100 text-green-800"
                                      : user.Status === "pending"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {user.Status === "paid" && (
                                    <FaCheckCircle className="mr-1" />
                                  )}
                                  {user.Status
                                    ? user.Status.charAt(0).toUpperCase() +
                                      user.Status.slice(1)
                                    : "N/A"}
                                </span>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-3">
                                <div className="flex items-center text-sm text-gray-600">
                                  <FaCalendarAlt className="mr-2 text-gray-400 text-xs" />
                                  {user.createdAt
                                    ? new Date(
                                        user.createdAt
                                      ).toLocaleDateString("en-IN", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                      })
                                    : "N/A"}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>

                      
                        {/* Summary Row */}
                        <tfoot className="bg-gray-50">
                          <tr>
                            <td
                              colSpan="5"
                              className="px-3 py-2 sm:px-4 sm:py-3"
                            >
                              <div className="flex justify-between items-center text-sm">
                                <span className="font-semibold text-gray-700">
                                  Total Registrations: {users.length}
                                </span>
                                <span className="font-semibold text-green-600">
                                  Paid:{" "}
                                  {
                                    users.filter((u) => u.Status === "paid")
                                      .length
                                  }
                                </span>
                                <span className="font-semibold text-gray-600">
                                  Pending:{" "}
                                  {
                                    users.filter((u) => u.Status === "pending")
                                      .length
                                  }
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <FaChartBar className="text-xl sm:text-2xl text-gray-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-3">
                      No Registration Records
                    </h4>
                    <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">
                      You haven't registered any students yet. All registrations
                      will appear here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 3. INCOME CALCULATOR */}
          <section className="mb-6 md:mb-8">
            <Calculator state={myArray1.Sold} />
          </section>

          {/* 4. REFERRAL SECTION */}
          <section className="mb-8 sm:mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center">
                      <FaUserFriends className="mr-2 text-purple-600" />
                      My Referrals
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                      Track your referrals' progress and earn incentives
                    </p>
                  </div>
                  {totalIncentives > 0 && (
                    <div className="bg-green-100 text-green-800 px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm">
                      <span className="font-bold">₹{totalIncentives}</span>{" "}
                      earned from referrals
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {/* Info Card */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-yellow-500 text-base sm:text-lg" />
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-semibold text-yellow-800">
                        Incentive Information
                      </h4>
                      <p className="text-yellow-700 text-xs sm:text-sm mt-1">
                        Once your partner completes 25 registrations, your
                        incentives will be unlocked and you'll earn ₹1000.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Referral Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-700">
                        {stats.totalReferrals}
                      </div>
                      <div className="text-xs sm:text-sm text-blue-600">
                        Total Referrals
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-green-700">
                        {stats.unlockedReferrals}
                      </div>
                      <div className="text-xs sm:text-sm text-green-600">
                        Unlocked (₹1000 each)
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border border-yellow-100">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-yellow-700">
                        {stats.pendingReferrals}
                      </div>
                      <div className="text-xs sm:text-sm text-yellow-600">
                        In Progress
                      </div>
                    </div>
                  </div>
                </div>

                {/* Referrals Table */}
                {referrals.length > 0 ? (
                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">
                            Phone No
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Progress
                          </th>
                          <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {referrals.map((referral) => (
                          <tr key={referral._id} className="hover:bg-gray-50">
                            <td className="px-3 py-3 sm:px-4 sm:py-4">
                              <div className="flex items-center">
                                <div className="h-8 w-8 sm:h-10 sm:w-10 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                                  <span className="text-xs sm:text-sm font-medium text-blue-600">
                                    {referral.name.charAt(0)}
                                  </span>
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-medium text-gray-900 truncate">
                                    {referral.name}
                                  </div>
                                  <div className="text-xs text-gray-500 sm:hidden">
                                    {referral.phone}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-3 py-3 sm:px-4 sm:py-4 hidden sm:table-cell">
                              <div className="flex items-center text-sm text-gray-600">
                                <FaPhone className="mr-2 text-gray-400 hidden sm:block" />
                                {referral.phone}
                              </div>
                            </td>
                            <td className="px-3 py-3 sm:px-4 sm:py-4">
                              <div className="min-w-[150px] sm:w-48">
                                {renderRegistrationProgress(referral)}
                              </div>
                            </td>
                            <td className="px-3 py-3 sm:px-4 sm:py-4">
                              <div className="w-16 sm:w-auto">
                                {renderUnlockStatus(referral)}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <FaUserFriends className="text-xl sm:text-2xl text-gray-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-3">
                      No Referrals Found
                    </h4>
                    <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base mb-4 sm:mb-6">
                      You haven't referred any partners yet. Referrals will
                      appear here automatically from the database.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-3 sm:px-4">
          <div className="max-w-md w-full bg-white rounded-xl p-4 sm:p-6 shadow-2xl mx-4">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
              Confirm Logout
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to logout from your dashboard?
            </p>

            <div className="mt-4 sm:mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm sm:text-base hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-red-600 text-white text-sm sm:text-base hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Safe Area */}
      <div className="h-4 sm:h-0"></div>
    </div>
  );
};

export default PartnerDashboard;
