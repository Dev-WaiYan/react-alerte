import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slices/alertSlice";

export default configureStore({
  reducer: {
    alert: alertReducer,
  },
});
