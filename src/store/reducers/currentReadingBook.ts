import { createSlice } from "@reduxjs/toolkit";
import type { AddBookPayload as Book } from "../actions/addBook";

export type CurrentReadingBookProps = {
  loading: boolean;
  payload: Book | undefined;
  error: any;
};

const initialState: CurrentReadingBookProps = {
  loading: false,
  payload: undefined,
  error: null,
};

const currentReadingBook = createSlice({
  name: "currentReadingBook",
  initialState,
  reducers: {
    setCurrentReadingBook(state, { payload }) {
      state.payload = payload;
    },
  },
});

export const { setCurrentReadingBook } = currentReadingBook.actions;
export default currentReadingBook.reducer;
