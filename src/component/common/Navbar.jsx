import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 400, once: true });

    // Scroll listener for transparent to solid transition
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem =
    "px-5 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#FFBB00] hover:text-[#142A51]";

  return (
    <nav
      className={`w-full  px-6 md:px-16 py-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#142A51] shadow-lg py-3 text-white" // Solid background and slightly thinner padding when scrolled
          : "bg-[#142a5113] text-black py-2" // Transparent background and slightly thicker padding when at top
      }`}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="text-[#FFBB00] font-bold text-lg">
          <Link to="/">
            <img src="/logo.jpeg" alt="Logo" className="h-[100%] w-10 rounded-md" />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-4 text-[15px] font-medium">
          <li>
            <Link to="/" className={navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navItem}>
              About
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="relative group">
            <div className={`flex items-center gap-1 ${navItem}`}>
              Services <FaChevronDown size={12} />
            </div>

            {/* Dropdown - ensure background is always solid so text is readable */}
            <div className="absolute left-0 top-full mt-2 w-64 bg-[#142A51] text-white border border-[#FFBB00]/30 rounded-lg shadow-xl hidden group-hover:block">
              <DropdownItem to="/fridgeservices" label="Fridge Repair" />
              <DropdownItem to="/dishwasherservice" label="Dishwasher Repair" />
              <DropdownItem to="/washing-machineservice" label="Washing Machine Repair" />
              <DropdownItem to="/gas-cookerservice" label="Gas Cooker Repair" />
              <DropdownItem to="/electric-stoveservice" label="Electric Stove Repair" />
            </div>
          </li>

          <li>
            <Link to="/contact" className={navItem}>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/blogs" className={navItem}>
              Blogs
            </Link>
          </li>
        </ul>

        {/* CALL BUTTON */}
        <div className="hidden md:flex items-center gap-2 bg-[#FFBB00] text-[#142A51] px-5 py-2 rounded-full font-semibold cursor-pointer hover:scale-105 transition duration-300 shadow-md">
          <FaPhoneAlt />
          <span>Call Now</span>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden text-xl cursor-pointer">
          {mobileMenu ? (
            <FaTimes onClick={() => setMobileMenu(false)} />
          ) : (
            <FaBars onClick={() => setMobileMenu(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div
          data-aos="fade-down"
          className="md:hidden mt-4 flex flex-col gap-2 bg-[#142A51] p-4 text-white rounded-lg shadow-lg border border-[#FFBB00]/20 absolute left-6 right-6"
        >
          <Link to="/" className={navItem} onClick={() => setMobileMenu(false)}>
            Home
          </Link>
          <Link to="/about" className={navItem} onClick={() => setMobileMenu(false)}>
            About
          </Link>

          {/* Optional: Add a simple dropdown list for mobile, or just link to a main services page */}
          <Link to="/services" className={navItem} onClick={() => setMobileMenu(false)}>
            Services
          </Link>

          <Link to="/contact" className={navItem} onClick={() => setMobileMenu(false)}>
            Contact
          </Link>
          <Link to="/blogs" className={navItem} onClick={() => setMobileMenu(false)}>
            Blogs
          </Link>

          <div className="flex items-center gap-2 bg-[#FFBB00] text-[#142A51] px-5 py-2 rounded-full font-semibold justify-center mt-2 cursor-pointer">
            <FaPhoneAlt />
            Call Now
          </div>
        </div>
      )}
    </nav>
  );
}

/* CLEAN DROPDOWN ITEM */
const DropdownItem = ({ label, to }) => {
  return (
    <Link
      to={to}
      className="
        block px-5 py-3 text-sm
        border-b border-[#FFBB00]/10 last:border-b-0
        hover:bg-[#FFBB00] hover:text-[#142A51]
        transition-all duration-200
      "
    >
      {label}
    </Link>
  );
};

export default Navbar;