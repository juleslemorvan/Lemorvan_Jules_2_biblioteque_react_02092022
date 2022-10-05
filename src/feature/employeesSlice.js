import { createSlice } from "@reduxjs/toolkit";

const employee = localStorage.getItem("Employees");

const initialState = {
  allEmployees: employee == null ? [] : JSON.parse(employee),
};

export const employeesSlice = createSlice({
  name: "employe",
  initialState,
  reducers: {
    addEmployee(state = initialState, action) {
      state.allEmployees = [...state.allEmployees, action.payload];

      // localStorage.setItem("Employees", JSON.stringify(state.allEmployees));
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
