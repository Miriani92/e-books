import { createSlice } from "@reduxjs/toolkit";

type ReadProps = {
  isListenSearch: boolean;
  isReadSearch: boolean;
};
const initialState: ReadProps = {
  isListenSearch: false,
  isReadSearch: false,
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
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
