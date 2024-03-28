import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    currentBtn: null,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addCurrentButton: (state, action) => {
      state.currentBtn = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, addCurrentButton } = appSlice.actions;
export default appSlice.reducer;
