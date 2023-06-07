import { configureStore } from "@reduxjs/toolkit";
import some from "./reducers/someSlice";

export const store = configureStore({
  reducer: { some },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
