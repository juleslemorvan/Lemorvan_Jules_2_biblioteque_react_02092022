import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../feature/employeesSlice";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
