import { createSlice } from "@reduxjs/toolkit";
import { onRegister } from "../../actions/auth/authActions";

type InitialaState = {
  currentUser: unknown;
  loading: boolean;
  error: any;
};

const initialState: InitialaState = {
  currentUser: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(onRegister.fulfilled, (state, action) => {
      console.log("user_created", action.payload);
      state.loading = false;
      state.currentUser = action.payload;
    });
    builder.addCase(onRegister.rejected, (state, action) => {
      console.log("new_user_registration_rejected", action.payload);
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export cdispatch onst {} = authSlice.actions;
export default authSlice.reducer;
