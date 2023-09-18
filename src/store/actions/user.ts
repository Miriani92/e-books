import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadUserData = createAsyncThunk("user/loadUserData", async () => {
  try {
    return;
  } catch (error) {}
});
