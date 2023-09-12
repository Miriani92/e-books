export const setSearch = (state, action) => {
  const screen = action.payload;
  if (screen === "ListenScreen") {
    state.isListenSearch = !state.isListenSearch;
  }
  if (screen === "ReadScreen") {
    state.isReadSearch = !state.isReadSearch;
  }
};
