import { configureStore } from "@reduxjs/toolkit";
import updateReducer from "../reduxStore/createSlice";

export const store = configureStore({
  reducer: {
    update: updateReducer,
  
  },
});
