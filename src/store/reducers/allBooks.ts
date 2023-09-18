import { createSlice } from "@reduxjs/toolkit";
import { loadRecentUploadedBooks } from "../actions/allBooks";
import type { AddBookPayload } from "../actions/addBook";

type Books = {
  loading: boolean;
  payload: AddBookPayload[];
  error: any;
};
type State = Books | null;

const initialState: State = {
  loading: false,
  payload: [],
  error: null,
};
const allBooks = createSlice({
  name: "allBooks",
  initialState: initialState as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadRecentUploadedBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadRecentUploadedBooks.fulfilled, (state, action) => {
      state.payload = action.payload;
      state.loading = false;
    });
    builder.addCase(loadRecentUploadedBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default allBooks.reducer;
