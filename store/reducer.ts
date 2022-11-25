import { createSlice } from "@reduxjs/toolkit";


// Initial state
const initialState: any =  null;

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setUser(state, action) {
      state = action.payload;
      return state
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;