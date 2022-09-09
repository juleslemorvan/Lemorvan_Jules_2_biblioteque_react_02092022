import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEmployees: [],
};

export const employeesSlice = createSlice({
  name: "employe",
  initialState,
  reducers: {
    addEmployee(state = initialState, action) {
      state.allEmployees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
