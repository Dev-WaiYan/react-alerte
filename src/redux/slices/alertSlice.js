import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },
  reducers: {
    add: (state, action) => {
      state.alerts = [...state.alerts, action.payload];
    },
    removeById: (state, action) => {
      state.alerts = state.alerts.filter(
        (alert) => alert.id !== action.payload
      );
    },
  },
});

export const { add, removeById } = alertSlice.actions;

export default alertSlice.reducer;
