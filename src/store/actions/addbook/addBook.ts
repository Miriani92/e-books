import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../utils/firebase";
import { ref, set } from "firebase/database";
import { auth } from "../../../utils/firebase";

const URL = "/authentication/userOwned/books";
type AddBookPayload = {
  header: string;
  authorName: string;
  category: string;
  authorSurname: string;
  storedPdfUrl: string;
};

export const onAddBook = createAsyncThunk(
  "myBooks/addBook",
  async ({
    header,
    authorName,
    authorSurname,
    category,
    storedPdfUrl,
  }: AddBookPayload) => {
    try {
      const { uid: userId } = auth.currentUser;
      const databaseRef = ref(db, URL + userId);
      set(databaseRef, {
        header,
        authorName,
        authorSurname,
        category,
        storedPdfUrl,
      });
      return;
    } catch (error) {
      console.log("eroror___", error);
      return error;
    }
  }
);
