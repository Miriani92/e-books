import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../utils/firebase";
import { auth } from "../../utils/firebase";
import { ref, set, push, get } from "firebase/database";
import type { AddBookPayload as Book } from "./addBook";

const URL = "/authentication/userOwned/booklist";

export const getReadingList = createAsyncThunk(
  "readingList/loadList",
  async () => {
    try {
      const { uid } = auth.currentUser;
      const bookListRef = ref(db, URL + `/${uid}`);
      const readingList = await get(bookListRef).then((snapshot) => {
        if (snapshot.exists()) {
          const payload = snapshot.val();
          const data = Object.entries(payload).map(([key, value]) => value);
          return data;
        }
      });
      return readingList;
    } catch (error) {
      console.log("error__", error);
    }
  }
);

export const addBook = createAsyncThunk(
  "readingList/addBook",
  async (book: Book, { dispatch }) => {
    try {
      const { uid } = auth.currentUser;
      const bookListRef = push(ref(db, URL + `/${uid}`));
      set(bookListRef, book);
      dispatch(getReadingList());
      return;
    } catch (error) {
      console.log("error__", error);
    }
  }
);
