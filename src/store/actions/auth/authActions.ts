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
      const { email: registeredEmail, displayName, uid } = userData.user;
      return { registeredEmail, displayName, uid };
    } catch (error) {
      rejectWithValue({ message: " Couldn't register the user" });
    }
  }
);

export const handleSignIn = createAsyncThunk(
  "auth/singin",
  async (
    { email: insertedEmail, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    const userData = await signInWithEmailAndPassword(
      auth,
      insertedEmail,
      password
    )
      .then((res) => {
        const { email, uid } = res.user;
        const currentUser = { email, uid };
        return currentUser;
      })
      .catch(() => rejectWithValue("Email or password is incorrect"));
    return userData;
  }
);

export const handleSignOut = createAsyncThunk(
  "auth/signout",
  async (payload, { rejectWithValue }) => {
    try {
      signOut(auth);
    } catch (error) {
      rejectWithValue({ message: "Couldn’t sign out" });
    }
  }
);
