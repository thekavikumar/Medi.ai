import React from "react";
import { Link } from "react-router-dom/dist";
import { useAuth } from "../contexts/AuthContext";

function PatNav() {
  const { handleLogout } = useAuth();

  return (
    <div className="px-10 py-5 flex items-center justify-between border-b border-[#03C988]">
      <h1 className="font-bold text-3xl text-gray-800">
        Med<span className="text-[#03C988]">.ai</span>
      </h1>
      <div className="flex items-center gap-10 font-semibold text-gray-700">
        <Link
          to="/"
          className="hover:text-[#03C988] duration-200 transition-all"
        >
          Appointments
        </Link>
        <Link
          to="/payment"
          className="hover:text-[#03C988] duration-200 transition-all"
        >
          Payment Status
        </Link>
        <Link
          to="/patProfile"
          className="hover:text-[#03C988] duration-200 transition-all"
        >
          Profile
        </Link>
        <Link
          to="/about"
          className="hover:text-[#03C988] duration-200 transition-all"
        >
          About Us
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#03C988] text-white rounded-md px-3  py-2 hover:text-gray-900 border-2 border-[#03C988]  hover:bg-white"
      >
        Logout
      </button>
    </div>
  );
}

export default PatNav;
