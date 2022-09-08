import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
