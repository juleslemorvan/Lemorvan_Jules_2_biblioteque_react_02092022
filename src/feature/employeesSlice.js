import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },
  reducers: {},
});

export default employeesSlice.reducer;
