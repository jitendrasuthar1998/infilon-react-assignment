import logo from "../assets/logo.svg";
import instagram from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";

const Footer = () => {
    return (
      <footer className="bg-[#1C1812] text-white py-6">
        <div className="md:max-w-[1024px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-2">
          {/* Left Section - Logo & Links */}
          <div className="flex md:flex-row flex-col items-center gap-2">
            {/* Logo */}
            <img src={logo} alt="Logo" className="h-8 w-auto" />
  
            {/* Navigation Links */}
            <nav className="flex gap-6 text-sm text-[#DFDEDD]">
              <a href="#" className="hover:underline">
                FAQ
              </a>
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Support
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
  
          {/* Right Section - Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full">
              <img src={facebook} alt="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-md">
              <img src={instagram} alt="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-md">
              <img src={linkedin} alt="LinkedIn" className="h-5 w-5" />
            </a>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="mt-[36px] text-center text-xs text-[#DFDEDD]">
          © 2024 Central Texas Fly Fishing All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  