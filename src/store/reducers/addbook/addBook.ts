/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from "@reduxjs/toolkit";
import { onAddBook } from "../../actions/addbook/addBook";

type AddBookProps = {
  loading: boolean;
  error: any;
};

const initialState: AddBookProps = {
  loading: false,
  error: null,
};

const addBookSlice = createSlice({
  name: "myBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onAddBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(onAddBook.fulfilled, (state, action) => {
      state.loading = true;
    });
    builder.addCase(onAddBook.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default addBookSlice.reducer;
