import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#142A51] text-white pt-16 pb-8 px-4 md:px-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <Link to="/">
            <img src="src/assets/images/refrigirator-log.jpeg" alt="logo" className="h-14 w-14 rounded-md mb-2" />
          </Link>
          <h2 className="text-2xl font-bold text-[#FFBB00] mb-2">
            Eco Spin Repair
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Providing reliable and professional dishwasher repair services with
            24/7 support. Your trusted partner for quick and efficient solutions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-3 text-[#FFBB00] text-xl">
            <FaFacebook className="cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-[#FFBB00] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#FFBB00] transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#FFBB00] transition">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-[#FFBB00] transition">
              <Link to="/fridgeservices">Services</Link>
            </li>
            <li className="hover:text-[#FFBB00] transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-[#FFBB00] mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#FFBB00] transition">Repair</li>
            <li className="hover:text-[#FFBB00] transition">Maintenance</li>
            <li className="hover:text-[#FFBB00] transition">Installation</li>
            <li className="hover:text-[#FFBB00] transition">Emergency Support</li>
          </ul>
        </div>

        {/* CONTACT & LOCATION */}
        <div>
          <h3 className="text-lg font-semibold text-[#FFBB00] mb-4">
            Contact & Location
          </h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              📍 Musaffah M10, Abu Dhabi
            </li>
            <li>
              📞  <a href="https://wa.me/971529820114" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFBB00]">+971 52 982 0114</a>
            </li>
            <li>
              ✉️ <a href="mailto:support@ecospinrepair.com" className="hover:text-[#FFBB00]">support@ecospinrepair.com</a>
            </li>
            <li>
              🕒 24/7 Available
            </li>
            <li>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#FFBB00] hover:underline"
              >
                View on Map
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} DishCare. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;