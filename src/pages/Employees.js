import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SortingTable from "../components/SortingTable";

const Employees = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className=" mt-8  border-gray-800 border-8 rounded-full flex justify-center items-center">
        <h1 className="text-2xl font-bold sm:text-3xl  p-3 ">
          Current Employee
        </h1>
      </div>
      <SortingTable />
      <Link
        to="/"
        className=" mt-5 p-2 rounded-full   border-2 border-gray-800 bold hover:bg-gray-800 hover:text-slate-200"
      >
        Back to HomePage
      </Link>
      <Footer />
    </div>
  );
};

export default Employees;
