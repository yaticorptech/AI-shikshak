import React from "react";
import logo from "../../assets/logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-[#000814] text-white text-center py-6 px-4">
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-3">
        <h5 className="font-semibold">Developed By</h5>
        <img src={logo} alt="Company Logo" className="mb-1 w-[100px]" />
        <div className="text-gray-300 text-sm">
          <p className="font-bold text-white">Yaticorp India Pvt Ltd</p>
          <p>
            2nd Floor, Sri Ram Building, Chowki, Kottara, Mangaluru, Karnataka
            575006
          </p>
          <p>Email: contact@yaticorp.com | Phone: +91 9141160295</p>
        </div>

        <div className="flex justify-center gap-5 text-2xl mt-3">
          <a
            href="https://www.instagram.com/yaticorp/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/people/YATICORP/61563083972053/?sk=about"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://in.linkedin.com/company/yaticorp-india-pvt-ltd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/channel/UCnAJ-D443HTp6UgdNRYm4Uw"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400"
          >
            <FaYoutube />
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-2">
          © 2025 Yaticorp India Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
