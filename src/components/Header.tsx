import headerLogo from "../assets/headerLogo.svg";
import hamburger from "../assets/hamburger.svg";

const Header = () => {
    return (
      <header className="bg-white py-4 px-6 fixed top-0 left-0 w-full z-50">
        <div className="md:max-w-[1024px] mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2 text-[#514432]">
            <img src={headerLogo} alt="Logo" className="h-8 w-auto" />
            <span className="text-lg font-normal md:block hidden font-gluten">
              Central Texas Fly Fishing
            </span>
          </div>
  
          {/* Navigation Menu */}
          <nav className="hidden md:flex gap-6 text-[#1C1812] text-sm">
            <a href="#" className="relative after:block after:h-[2px] after:w-full after:bg-[#1C1812] after:mt-1">
              Home
            </a>
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
  
          {/* Mobile Menu (Optional) */}
          <div className="md:hidden">
            <button className="text-[#DFDEDD]">
              <img src={hamburger} alt="hamburger"/>
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  