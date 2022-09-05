import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import states from "../data/States";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 ">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create Employee</h1>
      </div>

      <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4 ">
        <div>
          <label for="firstName" className="sr-only">
            firstName
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="First Name"
            />
          </div>
        </div>

        <div>
          <label for="LastName" className="sr-only">
            LastName
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="flex justify-center ">Date of Birth</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="flex justify-center ">Start Date</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-full"
          />
        </div>

        <div>
          <h2 className="text-bold text-2xl flex justify-center pt-4 pb-4">
            Address
          </h2>
          <div className="pt-4 pb-4">
            <label for="Street" className="sr-only">
              Street
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Street"
              />
            </div>
          </div>

          <div>
            <label for="City" className="sr-only">
              City
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="City"
              />
            </div>
          </div>

          <div className="pt-4 pb-4">
            <label for="States" className="flex justify-center">
              States
            </label>
            <select
              id="States"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {states.map((state) => {
                <option value={state.value}>{state.name}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-gray-800 rounded-lg"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
