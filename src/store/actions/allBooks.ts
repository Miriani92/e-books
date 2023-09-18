import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../utils/firebase";
import { ref, set, push, get, child } from "firebase/database";
import type { AddBookPayload as Book } from "./addBook";

const URL = "authentication/allMemebers/allBooks/";

export const addBook = createAsyncThunk(
  "allBooks/addToAllBooks",
  async (book: Book) => {
    try {
      const newBookRef = push(ref(db, URL));
      set(newBookRef, book);
    } catch (error) {
      console.log("eroer:", error);
    }
  }
);

export const loadRecentUploadedBooks = createAsyncThunk(
  "allBooks/loadRecentUploadedBooks",
  async () => {
    try {
      const allBooksResponse = await get(child(ref(db), URL)).then(
        (snapshot) => {
          if (snapshot.exists()) {
            const payload = snapshot.val();
            return Object.entries(payload).map(([key, value]) => value);
          } else {
            console.log("No data available");
          }
        }
      );
      const data = await allBooksResponse;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
