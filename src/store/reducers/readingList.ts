import { createSlice } from "@reduxjs/toolkit";
import { getReadingList } from "../actions/readingList";
import type { AddBookPayload as Book } from "../actions/addBook";

type ReadingListProps = {
  loading: boolean;
  payload: Book[];
  error: any;
};

const initialState: ReadingListProps = {
  loading: false,
  payload: [],
  error: null,
};

const readingList = createSlice({
  name: "readingList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReadingList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReadingList.fulfilled, (state, action) => {
      console.log("yessssss", action.payload);
      state.payload = action.payload;
      state.loading = false;
    });
    builder.addCase(getReadingList.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default readingList.reducer;
