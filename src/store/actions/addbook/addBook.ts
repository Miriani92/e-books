import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../utils/firebase";
import { ref, set, push, child } from "firebase/database";

const URL = "authentication/userOwned/books";
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
      const newBookRef = push(ref(db, URL));
      set(newBookRef, {
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
