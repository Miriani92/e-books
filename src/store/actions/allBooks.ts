import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../utils/firebase";
import { ref, set, push } from "firebase/database";
import type { AddBookPayload as Book } from "./addBook";

const URL = "authentication/allMemebers/allBooks/";

export const addBook = createAsyncThunk(
  "allBooks/loadRecentUploads",
  async (book: Book) => {
    try {
      const newBookRef = push(ref(db, URL));
      set(newBookRef, book);
    } catch (error) {
      console.log("eroer:", error);
    }
  }
);
