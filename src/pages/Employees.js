import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SortingTable from "../components/SortingTable";

const Employees = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <h1 className="text-2xl font-bold sm:text-3xl p-8">Current Employee</h1>
      <SortingTable />
      <Footer />
    </div>
  );
};

export default Employees;
