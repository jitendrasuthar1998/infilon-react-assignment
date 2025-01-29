import logo from "../assets/logo.svg";
import instagram from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";

import { footerNav } from "../data";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-[#1C1812] text-[#F7F7F6] px-6 py-6">
      <div className="page-section-container flex flex-col md:flex-row items-center justify-between px-6 md:px-0 gap-2">
        {/* Left Section - Logo & Links */}
        <div className="flex md:flex-row flex-col items-center gap-6">
          {/* Logo */}
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="md:h-10 h-8 md:w-[71.63px]" />
          </Link>

          {/* Navigation Links */}
          <nav className="flex justify-center gap-6 text-[16px]">
            {footerNav.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className="relative group h-[32px] py-1"
              >
                {item.name}
                {/* Active state (White Bottom Border) */}
                {location.pathname === item.url && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>
                )}
                {/* Hover Effect (Gray Bottom Border) */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-[#C6C5C3] transition-all duration-300"></div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex">
          <a href="#" className="w-10 h-10 flex justify-center items-center">
            <img src={facebook} alt="Facebook" className="h-5 w-5" />
          </a>
          <a href="#" className="w-10 h-10 flex justify-center items-center">
            <img src={instagram} alt="Instagram" className="h-5 w-5" />
          </a>
          <a href="#" className="w-10 h-10 flex justify-center items-center">
            <img src={linkedin} alt="LinkedIn" className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-[36px] text-center text-xs leading-[18px] text-[##AEADAA]">
        © 2024 Central Texas Fly Fishing All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
