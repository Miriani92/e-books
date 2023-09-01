import { createAsyncThunk } from "@reduxjs/toolkit";

export const addBookToCategory = createAsyncThunk(
  "booksCategory/addBook",
  async () => {
    return 0;
  }
);
