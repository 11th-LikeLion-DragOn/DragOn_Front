import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  id: "",
  username: "",
  nickname: "",
  real_balls: "",
  profile: "",
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initUser: (state) => {
      state.id = initialState.id;
      state.username = initialState.username;
      state.nickname = initialState.nickname;
      state.profile = initialState.profile;
      state.real_balls = initialState.real_balls;
    },
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.nickname = action.payload.nickname;
      state.profile = action.payload.profile;
      state.real_balls = action.payload.real_balls;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
