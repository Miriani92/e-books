import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../utils/firebase";
import { ref, set, push, get, query, limitToFirst } from "firebase/database";
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
      const queryReference = query(ref(db, URL), limitToFirst(5));
      const allBooksResponse = await get(queryReference).then((snapshot) => {
        if (snapshot.exists()) {
          const payload = snapshot.val();
          return Object.entries(payload).map(([key, value]) => value);
        } else {
          console.log("No data available");
        }
      });
      const data = await allBooksResponse;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
