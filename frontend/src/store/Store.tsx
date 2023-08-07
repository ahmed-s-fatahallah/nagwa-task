import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./mainSlice";

export const store = configureStore({
  reducer: {
    slice: mainSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
