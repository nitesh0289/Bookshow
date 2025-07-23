import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: {}
};

export const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    //Reducers Actions

    createBooking: (state, action) => {
      state.current = {
        bookingId: action.movieId
      };
    },

    updateBooking: (state, action) => {
      state.current = {
        ...state.current,
        ...action
      };
    },

    resetBooking: (state) => {
      state = initialState;
    }
  }
});

// Export actions
export const { createBooking, updateBooking, resetBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
