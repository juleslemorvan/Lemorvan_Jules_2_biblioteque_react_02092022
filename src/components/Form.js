import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { States } from "../data/State";
import { Departments } from "../data/Departments";
import { useDispatch } from "react-redux";
import { addEmployee } from "../feature/employeesSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setbirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [etat, setEtat] = useState("");
  const [zip, setZip] = useState(0);
  const [department, setDepartment] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      id: nanoid(),
      prénom: firstName,
      nom: lastName,
      birth: birthDate,
      départ: startDate,
      rue: street,
      ville: city,
      etat: etat,
      zip: zip,
      departement: department,
    };

    dispatch(addEmployee(newUser));
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setEtat("");
    setZip("");
    setDepartment("");
  };

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 ">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create Employee</h1>
      </div>

      <form
        className="max-w-md mx-auto mt-8 mb-0 space-y-4 "
        action=""
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="firstName" className="sr-only">
            firstName
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="LastName" className="sr-only">
            LastName
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="flex justify-center ">Date of Birth</p>
          <DatePicker
            // dateFormat="dd/MM/yy"
            selected={birthDate}
            onChange={(date) => setbirthDate(date)}
            className="w-full"
            value={birthDate}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="flex justify-center ">Start Date</p>
          <DatePicker
            // dateFormat="dd/MM/yy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-full"
            value={startDate}
          />
        </div>

        <div>
          <h2 className="text-bold text-2xl flex justify-center pt-4 pb-4">
            Address
          </h2>
          <div className="pt-4 pb-4">
            <label htmlFor="Street" className="sr-only">
              Street
            </label>

            <div className="relative">
              <input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                type="text"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Street"
              />
            </div>
          </div>

          <div>
            <label htmlFor="City" className="sr-only">
              City
            </label>

            <div className="relative">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="City"
              />
            </div>
          </div>

          <div className="pt-4 pb-4">
            <label htmlFor="etat" className="flex justify-center">
              States
            </label>
            <select
              value={etat}
              onChange={(e) => setEtat(e.target.value)}
              id="etat"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {States.map((state) => {
                return (
                  <option value={state.abbreviation} key={state.name}>
                    {state.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-center  items-center">
          <label htmlFor="zip" className=" flex justify-center ">
            Zip Code
          </label>
          <input
            type="number"
            id="zip"
            name="zip"
            min="-100000"
            max="10000000"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>

        <div className="pt-4 pb-4">
          <label htmlFor="Department" className="flex justify-center">
            Department
          </label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            id="Department"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {Departments.map((Department) => {
              return (
                <option value={Department.name} key={Department.name}>
                  {Department.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-gray-900 rounded-lg  transition hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
