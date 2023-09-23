import { createSlice } from "@reduxjs/toolkit";
import { searchAuthor } from "../actions/search";
import { AddBookPayload as Book } from "../actions/addBook";

type ReadProps = {
  loading: boolean;
  isListenSearch: boolean;
  isReadSearch: boolean;
  payload: Book[];
};
const initialState: ReadProps = {
  loading: false,
  isListenSearch: false,
  isReadSearch: false,
  payload: [],
};

const searchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearch(state, action) {
      const screen = action.payload;
      if (screen === "ListenScreen") {
        state.isListenSearch = !state.isListenSearch;
      }
      if (screen === "ReadScreen") {
        state.isReadSearch = !state.isReadSearch;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchAuthor.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchAuthor.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      state.payload = payload;
    });
    builder.addCase(searchAuthor.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
