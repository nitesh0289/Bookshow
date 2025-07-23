import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: {},
  error: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducers Actions

    // Fetching user => loading started
    userRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    // On success => update user payload
    userSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },

    // On failure => reset user payload
    userFailure: (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    },

    // Logout => Clear user
    userLogout: (state) => {
      state.loading = false;
      state.user = {};
      state.error = null;
    }
  }
});

// Export actions
export const { userRequest, userSuccess, userFailure, userLogout } = userSlice.actions;

export default userSlice.reducer;
