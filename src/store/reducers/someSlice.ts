import { createSlice } from "@reduxjs/toolkit";
import { greetAction } from "../actions/someAction";

type InitialaState = {
  greet: string;
};
const initialState: InitialaState = {
  greet: "",
};

const greetSlice = createSlice({
  name: "greet",
  initialState,
  reducers: { handleGreet: greetAction },
});

export const { handleGreet } = greetSlice.actions;
export default greetSlice.reducer;
