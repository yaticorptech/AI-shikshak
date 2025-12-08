import React, { useState } from "react";

function Calculator() {
  const [expectedRegistrations, setExpectedRegistrations] = useState(0);
  const [verifiedRegistrations, setVerifiedRegistrations] = useState(0);

  const calculateEarnings = (count) => {
    if (count < 25) return 0;
    if (count < 50) return count * 100;
    if (count < 100) return count * 125;
    if (count < 200) return count * 150;
    if (count < 300) return count * 175;
    return count * 200;
  };

  return (
    <section className="bg-white border border-blue-200 rounded-xl shadow-xl max-w-6xl w-full p-4 sm:p-6 lg:p-10 mx-auto my-6 sm:my-10">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-blue-700">
        INCOME CALCULATOR
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* LEFT SECTION */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
          <div className="space-y-6">
            {/* Expected Registrations */}
            <div className="bg-white border border-blue-300 rounded-xl p-4 sm:p-5">
              <p className="text-blue-700 text-base sm:text-lg font-semibold mb-4 text-center">
                Enter Expected AI Shikshak Registrations
              </p>

              <div className="flex justify-center">
                <input
                  type="number"
                  min="0"
                  max="500"
                  value={expectedRegistrations}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    setExpectedRegistrations(value);
                    setVerifiedRegistrations(value);
                  }}
                  className="w-32 sm:w-40 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white text-blue-900 border-2 border-blue-500 text-center text-xl sm:text-2xl font-bold focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Estimated Earnings */}
            <div className="bg-white border border-blue-300 rounded-xl p-4 sm:p-5">
              <div className="text-center mb-4">
                <p className="text-blue-600 text-sm mb-2">
                  Your Estimated Earnings
                </p>

                {verifiedRegistrations < 25 ? (
                  <div>
                    <p className="text-orange-500 text-4xl sm:text-5xl font-extrabold">
                      {25 - verifiedRegistrations}
                    </p>
                    <p className="text-orange-400 text-xs mt-1">
                      more registrations needed
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-green-600 text-4xl sm:text-5xl font-extrabold">
                      ₹
                      {calculateEarnings(verifiedRegistrations).toLocaleString(
                        "en-IN"
                      )}
                    </p>
                    <p className="text-green-500 text-xs mt-1">
                      You are qualified for payout
                    </p>
                  </div>
                )}
              </div>

              {/* Slider */}
              <div className="mt-4 sm:mt-6">
                <label className="block text-sm font-semibold text-blue-800 mb-2">
                  Number of Verified Registrations
                </label>

                <input
                  type="range"
                  min="0"
                  max="500"
                  value={verifiedRegistrations}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    setVerifiedRegistrations(value);
                    setExpectedRegistrations(value);
                  }}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={verifiedRegistrations}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      setVerifiedRegistrations(value);
                      setExpectedRegistrations(value);
                    }}
                    className="w-24 sm:w-28 px-3 py-2 rounded-lg bg-blue-50 border border-blue-300 text-blue-900 text-center"
                  />
                  <span className="text-xs text-blue-600">
                    Slide or enter value
                  </span>
                </div>
              </div>

              {/* Progress Box */}
              <div className="mt-5 sm:mt-6 bg-blue-100 border border-blue-300 p-4 rounded-xl">
                <p className="text-blue-800 font-bold mb-2">
                  ⚡ Get to Next Level!
                </p>

                <p className="text-sm text-blue-700 mb-2">
                  {verifiedRegistrations < 25 ? (
                    <>
                      You need <b>{25 - verifiedRegistrations}</b> more to start
                      earning.
                    </>
                  ) : verifiedRegistrations < 50 ? (
                    <>
                      Just <b>{50 - verifiedRegistrations}</b> more to reach
                      ₹125/registration!
                    </>
                  ) : verifiedRegistrations < 100 ? (
                    <>
                      Only <b>{100 - verifiedRegistrations}</b> more to reach
                      ₹150/registration!
                    </>
                  ) : verifiedRegistrations < 200 ? (
                    <>
                      Just <b>{200 - verifiedRegistrations}</b> more to reach
                      ₹175/registration!
                    </>
                  ) : verifiedRegistrations < 300 ? (
                    <>
                      Only <b>{300 - verifiedRegistrations}</b> more to reach
                      ₹200/registration!
                    </>
                  ) : (
                    <>
                      🎉 Maximum rate achieved! Keep earning at
                      ₹200/registration!
                    </>
                  )}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        100,
                        (verifiedRegistrations /
                          (verifiedRegistrations < 25
                            ? 25
                            : verifiedRegistrations < 50
                            ? 50
                            : verifiedRegistrations < 100
                            ? 100
                            : verifiedRegistrations < 200
                            ? 200
                            : verifiedRegistrations < 300
                            ? 300
                            : 100)) *
                          100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-blue-800">
            💰 Remuneration Slabs
          </h3>

          <div className="space-y-3">
            {[
              {
                range: "25 - 49",
                rate: 100,
                earnings: "₹2,500 - ₹4,900",
                active:
                  verifiedRegistrations >= 25 && verifiedRegistrations <= 49,
              },
              {
                range: "50 - 99",
                rate: 125,
                earnings: "₹6,250 - ₹12,375",
                active:
                  verifiedRegistrations >= 50 && verifiedRegistrations <= 99,
              },
              {
                range: "100 - 199",
                rate: 150,
                earnings: "₹15,000 - ₹29,850",
                active:
                  verifiedRegistrations >= 100 && verifiedRegistrations <= 199,
              },
              {
                range: "200 - 299",
                rate: 175,
                earnings: "₹35,000 - ₹52,325",
                active:
                  verifiedRegistrations >= 200 && verifiedRegistrations <= 299,
              },
              {
                range: "300+",
                rate: 200,
                earnings: "₹60,000+",
                active: verifiedRegistrations >= 300,
              },
            ].map((slab, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border ${
                  slab.active
                    ? "bg-blue-100 border-blue-400"
                    : "border-blue-200 bg-white"
                }`}
              >
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <p className="text-blue-800 font-semibold">
                      {slab.range} registrations
                    </p>
                    <p className="text-blue-600 text-xs">{slab.earnings}</p>
                  </div>
                  <span className="text-blue-700 font-bold text-sm sm:text-base">
                    ₹{slab.rate}/registration
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
