import { PayloadAction } from "@reduxjs/toolkit";

export const greetAction = (
  state: { greet: string },
  action: PayloadAction<string>
) => {
  state.greet = action.payload;
};
