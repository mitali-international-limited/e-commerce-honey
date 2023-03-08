import React, { useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  isSidebarOpen: false,
  isSticky: false,
  isModalOpen: false,
  isCartOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    stickyPosition: (state) => {
      state.isSticky = !state.isSticky;
    },
    favToggle: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    cartToggle: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
export const { toggle, stickyPosition, favToggle, cartToggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
