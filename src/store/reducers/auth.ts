/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from "@reduxjs/toolkit";
import { onRegister } from "../actions/auth";
import { handleSignOut } from "../actions/auth";
import { handleSignIn } from "../actions/auth";

type InitialaStateProps = {
  currentUser: unknown;
  loading: boolean;
  isSigndIn: boolean;
  error: any;
};

const initialState: InitialaStateProps = {
  currentUser: {},
  isSigndIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handle signup
    builder.addCase(onRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(onRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.isSigndIn = true;
    });
    builder.addCase(onRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // handle sign in

    builder.addCase(handleSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleSignIn.fulfilled, (state, action) => {
      state.isSigndIn = true;
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(handleSignIn.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    // handle sign out
    builder.addCase(handleSignOut.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleSignOut.fulfilled, (state) => {
      state.loading = false;
      state.isSigndIn = false;
      state.currentUser = null;
    });
    builder.addCase(handleSignOut.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
