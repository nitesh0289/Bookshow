import { configureStore } from "@reduxjs/toolkit";

import bookingReducer from "./slices/BookingSlice";
import userReducer from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer
  }
});

export default store;
