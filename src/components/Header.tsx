import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../assets/headerLogo.svg";
import hamburger from "../assets/hamburger.svg";
import { mainNav } from "../data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current URL

  return (
    <>
      {/* Header Bar */}
      <header className="bg-white py-2 px-6 fixed top-0 left-0 w-full z-50 shadow">
        <div className="md:max-w-[1024px] mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2 text-[#514432]">
            <Link to={"/"}>
              <img
                src={headerLogo}
                alt="Logo"
                className="md:h-10 h-8 md:w-[71.63px]"
              />
            </Link>
            <span className="text-[20px] font-normal md:block hidden font-gluten w-[250px]">
              Central Texas Fly Fishing
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-[#1C1812] md:text-[16px]">
            {mainNav.map((item) => (
              <Link key={item.url} to={item.url} className="relative group">
                {item.name}
                {/* Active State (Black Bottom Border) */}
                {location.pathname === item.url && (
                  <div className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-black"></div>
                )}
                {/* Hover Effect (Gray Bottom Border) */}
                <div className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-transparent group-hover:bg-[#C6C5C3] transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-[#DFDEDD] active:bg-[#C6C5C3] focus:ring-2 focus:ring-[#1C1812] focus:ring-offset-1 h-10 w-10 flex items-center justify-center rounded-sm"
            >
              <img src={hamburger} alt="hamburger" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation (Full-Screen Menu) */}
      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg flex flex-col items-center justify-center gap-6 text-lg transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {mainNav.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            className={`relative py-2 ${
              location.pathname === item.url ? "font-bold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
            {/* Active State (Black Bottom Border) */}
            {location.pathname === item.url && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
            )}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
