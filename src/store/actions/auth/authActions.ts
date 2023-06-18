import { auth } from "../../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

// export const onUserSignUp = (
//   state: { user: any },
//   action: PayloadAction<string>
// ) => {
//   state.user = action.payload;
// };

export const onRegister = createAsyncThunk(
  "auth/register",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { email: registeredEmail, displayName, uid } = response.user;
      return { registeredEmail, displayName, uid };
    } catch (error) {
      rejectWithValue({ message: "user could not register" });
    }
  }
);
