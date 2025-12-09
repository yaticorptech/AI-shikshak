import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-xl text-center border border-blue-200">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-inner">
            <span className="text-5xl text-green-600">✔</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Your registration has been successfully completed. Thank you for
          joining the National Youth AI Mission.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
