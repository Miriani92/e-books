import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../utils/firebase";
import { ref, set, push } from "firebase/database";
import { addBookToCategory } from "./booksCategory";
import { addAuthor } from "./author";

const URL = "authentication/userOwned/books";
export type AddBookPayload = {
  header: string;
  authorName: string;
  category: string;
  authorSurname: string;
  storedPdfUrl: string;
};

export const onAddBook = createAsyncThunk(
  "myBooks/addBook",
  async (
    {
      header,
      authorName,
      authorSurname,
      category,
      storedPdfUrl,
    }: AddBookPayload,
    { dispatch }
  ) => {
    try {
      const addedBookData = {
        header,
        authorName,
        authorSurname,
        category,
        storedPdfUrl,
      };
      const newBookRef = push(ref(db, URL));
      set(newBookRef, addedBookData);
      dispatch(addBookToCategory(addedBookData));
      // dispatch(addAuthor);
      return;
    } catch (error) {
      console.log("eroror___", error);
      return error;
    }
  }
);
