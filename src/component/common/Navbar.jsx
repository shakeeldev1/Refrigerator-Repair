import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false); // Added state for desktop dropdown
  
  // To close the menus automatically when the route changes
  const location = useLocation();

  useEffect(() => {
    // Close all menus on route change
    setMobileMenu(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false); // Force close desktop dropdown on navigation
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);

  const navItem =
    "px-5 py-2 rounded-md cursor-pointer transition-all duration-300 hover:text-[#FFBB00] font-medium";

  return (
    <>
      {/* Overlay to close menu when clicking outside on mobile */}
      {mobileMenu && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenu(false)}
        />
      )}

      <nav
        className={`w-full px-6 md:px-16 fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#142A51]/90 backdrop-blur-md shadow-lg py-3 text-white" 
            : "bg-transparent py-5 text-white" 
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          
          {/* LOGO */}
          <div className="text-[#FFBB00] font-bold text-lg z-50">
            <Link to="/">
              <img src="/logo.jpeg" alt="Logo" className="h-[100%] w-12 rounded-md" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-4 text-[15px]">
            <li><Link to="/" className={navItem}>Home</Link></li>
            <li><Link to="/about" className={navItem}>About</Link></li>

            {/* DESKTOP SERVICES DROPDOWN (Now controlled by React State) */}
            <li 
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <div className={`flex items-center gap-1.5 ${navItem}`}>
                Services 
                <FaChevronDown 
                  size={10} 
                  className={`mt-0.5 transition-transform duration-300 ${desktopServicesOpen ? "rotate-180 text-[#FFBB00]" : ""}`} 
                />
              </div>

              {/* Dropdown Container - Reduced pt-4 to pt-2 to bring it closer */}
              <div 
                className={`absolute left-0 top-full pt-2 transition-all duration-300 w-64 ${
                  desktopServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                }`}
              >
                <div className="bg-[#142A51] text-white border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <DropdownItem to="/fridgeservices" label="Fridge Repair" onClick={() => setDesktopServicesOpen(false)} />
                  <DropdownItem to="/dishwasherservice" label="Dishwasher Repair" onClick={() => setDesktopServicesOpen(false)} />
                  <DropdownItem to="/washing-machineservice" label="Washing Machine Repair" onClick={() => setDesktopServicesOpen(false)} />
                  <DropdownItem to="/gas-cookerservice" label="Gas Cooker Repair" onClick={() => setDesktopServicesOpen(false)} />
                  <DropdownItem to="/electric-stoveservice" label="Electric Stove Repair" onClick={() => setDesktopServicesOpen(false)} />
                </div>
              </div>
            </li>

            <li><Link to="/contact" className={navItem}>Contact</Link></li>
            <li><Link to="/blogs" className={navItem}>Blogs</Link></li>
          </ul>

          {/* CALL BUTTON (DESKTOP) */}
          <div className="hidden md:flex items-center gap-2 bg-[#FFBB00] text-[#142A51] px-6 py-2.5 rounded-full font-bold cursor-pointer hover:shadow-lg hover:shadow-[#FFBB00]/30 transition-all duration-300">
            <FaPhoneAlt size={14} />
            <span>Call Now</span>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="md:hidden text-2xl cursor-pointer z-50 text-white relative">
            {mobileMenu ? (
              <FaTimes onClick={() => setMobileMenu(false)} className="text-[#FFBB00]" />
            ) : (
              <FaBars onClick={() => setMobileMenu(true)} className={isScrolled ? "text-white" : "text-white"} /> 
            )}
          </div>
        </div>

        {/* MOBILE MENU (Slide from Right) */}
        <div
          className={`fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-[#142A51] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col pt-24 px-6 md:hidden z-40 border-l border-white/10 ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4 text-white text-lg">
            <Link to="/" className="py-2 border-b border-white/10" onClick={() => setMobileMenu(false)}>Home</Link>
            <Link to="/about" className="py-2 border-b border-white/10" onClick={() => setMobileMenu(false)}>About</Link>

            {/* MOBILE SERVICES ACCORDION */}
            <div className="py-2 border-b border-white/10">
              <div 
                className="flex items-center justify-between cursor-pointer text-white"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <FaChevronDown 
                  size={12} 
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#FFBB00]" : ""}`} 
                />
              </div>
              
              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 flex flex-col ${
                  mobileServicesOpen ? "max-h-64 opacity-100 mt-4 gap-3 pl-4" : "max-h-0 opacity-0"
                }`}
              >
                <Link to="/fridgeservices" className="text-sm text-slate-300 hover:text-[#FFBB00]" onClick={() => setMobileMenu(false)}>Fridge Repair</Link>
                <Link to="/dishwasherservice" className="text-sm text-slate-300 hover:text-[#FFBB00]" onClick={() => setMobileMenu(false)}>Dishwasher Repair</Link>
                <Link to="/washing-machineservice" className="text-sm text-slate-300 hover:text-[#FFBB00]" onClick={() => setMobileMenu(false)}>Washing Machine Repair</Link>
                <Link to="/gas-cookerservice" className="text-sm text-slate-300 hover:text-[#FFBB00]" onClick={() => setMobileMenu(false)}>Gas Cooker Repair</Link>
                <Link to="/electric-stoveservice" className="text-sm text-slate-300 hover:text-[#FFBB00]" onClick={() => setMobileMenu(false)}>Electric Stove Repair</Link>
              </div>
            </div>

            <Link to="/contact" className="py-2 border-b border-white/10" onClick={() => setMobileMenu(false)}>Contact</Link>
            <Link to="/blogs" className="py-2 border-b border-white/10" onClick={() => setMobileMenu(false)}>Blogs</Link>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-center gap-2 bg-[#FFBB00] text-[#142A51] px-5 py-3 rounded-full font-bold cursor-pointer w-full">
              <FaPhoneAlt />
              Call Now
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

/* DESKTOP DROPDOWN ITEM */
const DropdownItem = ({ label, to, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        block px-5 py-3.5 text-sm
        border-b border-white/5 last:border-b-0
        hover:bg-[#FFBB00] hover:text-[#142A51] hover:pl-7
        transition-all duration-300
      "
    >
      {label}
    </Link>
  );
};

export default Navbar;