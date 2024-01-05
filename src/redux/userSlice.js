import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const name = "UserSlice";

const initialState = {
  id: "",
  username: "",
  nickname: "",
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initUser: (state) => {
      state.id = initialState.id;
      state.username = initialState.username;
      state.nickname = initialState.nickname;
    },
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.nickname = action.payload.nickname;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
