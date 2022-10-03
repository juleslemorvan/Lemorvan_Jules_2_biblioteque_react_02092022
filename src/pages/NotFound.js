import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col bg-gray-800 justify-center items-center w-full h-screen">
      <div className="text-5xl text-bold text-slate-400 pb-9 ">ERROR 404</div>
      <Link to="/" className="text-5xl text-slate-300 underline">
        {" "}
        Back to the Home Page
      </Link>
    </div>
  );
};

export default NotFound;
