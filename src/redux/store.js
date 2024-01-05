import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { useDispatch, useSelector } from "react-redux";

import thunk from "redux-thunk";
import userReducer from "../redux/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
