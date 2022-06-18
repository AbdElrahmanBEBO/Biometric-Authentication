import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      if (payload.code) {
        // he is a student
        state.userType = "student";
        state.code = payload.code;
      } else {
        state.userType = "instructor";
        state.id = payload.id;
        state.name = payload.name;
      }
      state.isLoggedIn = true;
      state.token = payload.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
