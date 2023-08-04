import { auth } from "../../../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { uploadImageToDatabase } from "../../utils/auth.utils";

export const onRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      email,
      password,
      imageURI,
    }: { name: string; email: string; password: string; imageURI: any },
    { rejectWithValue }
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const updatedUser: any = { displayName: name, photoURL: null };

      if (imageURI) {
        const storedImageURL = await uploadImageToDatabase(imageURI);
        updatedUser.photoURL = storedImageURL;
      }
      await updateProfile(auth.currentUser, updatedUser);

      const {
        email: registeredEmail,
        displayName,
        uid,
        photoURL,
      } = auth.currentUser;

      return { email: registeredEmail, displayName, uid, photoURL };
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
