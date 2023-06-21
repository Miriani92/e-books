import { auth } from "../../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";

export const onRegister = createAsyncThunk(
  "auth/register",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("res_user", userData.user);
      const { email: registeredEmail, displayName, uid } = userData.user;
      return { registeredEmail, displayName, uid };
    } catch (error) {
      rejectWithValue({ message: "user could not register" });
    }
  }
);

export const handleSignIn = createAsyncThunk(
  "auth/singin",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res.user.email;
    } catch (error) {
      rejectWithValue({ message: error.message });
    }
  }
);

export const handleSignOut = createAsyncThunk(
  "auth/signout",
  async (payload, { rejectWithValue }) => {
    try {
      signOut(auth);
    } catch (error) {
      rejectWithValue({ message: error.message });
    }
  }
);
