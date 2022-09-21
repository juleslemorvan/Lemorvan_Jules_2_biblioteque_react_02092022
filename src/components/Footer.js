import React from "react";

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 h-9  bg-gray-900 text-slate-300 items-center mt-8">
      <ul className="w-full h-full flex justify-evenly items-center ">
        <li className="hover:text-sky-100 focus:outline-none focus:ring">
          @All right reserved
        </li>
        <li className="hover:text-sky-100 focus:outline-none focus:ring">
          Confidentiality
        </li>
        <li className="hover:text-sky-100 focus:outline-none focus:ring">
          Contact Us
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
