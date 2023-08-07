import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Error = { isError: boolean; msg: string };

interface MainStore {
  score: number;
  isStarted: boolean;
  isEnded: boolean;
  isLoading: boolean;
  error: Error;
}

const initialState: MainStore = {
  score: 0,
  isStarted: false,
  isEnded: false,
  isLoading: false,
  error: { isError: false, msg: "" },
};

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.score += 10;
    },
    startActivity: (state) => {
      state.isStarted = true;
      state.isEnded = false;
      state.score = 0;
    },
    endActivity: (state) => {
      state.isStarted = false;
      state.isEnded = true;
    },
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error.isError = action.payload.isError;
      state.error.msg = action.payload.msg;
    },
  },
});

export const { increment, startActivity, endActivity, isLoading, setError } =
  mainSlice.actions;

export default mainSlice.reducer;
