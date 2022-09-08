import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [
      { name: "jules", prenom: "lemorvan", age: 29 },
      { name: "albert", prenom: "legros", age: 25 },
    ],
  },
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = {
        id: new Date(),
        name: action.payload,
      };
      state.push(newEmployee);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
