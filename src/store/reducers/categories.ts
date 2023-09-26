import { createSlice } from "@reduxjs/toolkit";
import { loadByCategories } from "../actions/categories";
import type { AddBookPayload as Book } from "../actions/addBook";

type CategoriesProps = {
  loading: boolean;
  searchWords: string[];
  payload: Book[];
  error: any;
};

const initialState: CategoriesProps = {
  loading: false,
  searchWords: [],
  payload: [],
  error: null,
};

const categories = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    addCategoryToSearch(state, { payload }) {
      state.searchWords = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadByCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadByCategories.fulfilled, (state, { payload }) => {
      state.payload = payload;
      state.loading = false;
    });
    builder.addCase(loadByCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addCategoryToSearch } = categories.actions;
export default categories.reducer;
