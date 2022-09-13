import React from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const Employees = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <h1 className="text-2xl font-bold sm:text-3xl pt-8">Current Employee</h1>
      <Table />
    </div>
  );
};

export default Employees;
