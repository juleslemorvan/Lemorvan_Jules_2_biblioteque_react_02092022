import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[80px] bg-gray-800 text-slate-100 flex justify-center items-center">
        <div className="border-solid border-2 border-stone-300">
          <Link to="/employees" className="cursor-pointer ">
            --View Current Employees--
          </Link>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
