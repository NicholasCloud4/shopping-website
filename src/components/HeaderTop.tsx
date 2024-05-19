import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <FaTwitter />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ON ORDERS OVER - $50
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
