import React from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link
      to="/"
      className="w-full h-[150px] bg-gray-900 text-slate-50 flex flex-col justify-center items-center p-5"
    >
      <BsPersonPlusFill color="white" fontSize={30} />
      <div className="text-3xl flex justify-between items-center">
        <span className="text-4xl">HR</span>net
      </div>
    </Link>
  );
};

export default Navbar;
