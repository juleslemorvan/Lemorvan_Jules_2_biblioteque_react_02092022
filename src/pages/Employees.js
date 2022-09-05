import React from "react";
import Navbar from "../components/Navbar";

const Employees = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <h1 className="text-2xl font-bold sm:text-3xl pt-8">Current Employee</h1>
    </div>
  );
};

export default Employees;
