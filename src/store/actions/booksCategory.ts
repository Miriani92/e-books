import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../utils/firebase";
import { ref, set, push } from "firebase/database";
import type { AddBookPayload } from "./addBook";

const URL = "authentication/userReadable/books/categories";

export const addBookToCategory = createAsyncThunk(
  "booksCategory/addBook",
  async ({
    header,
    authorName,
    authorSurname,
    category,
    storedPdfUrl,
    storedCoverImageUrl,
  }: AddBookPayload) => {
    const bookCategoryRef = push(ref(db, URL + `/${category}`));
    set(bookCategoryRef, {
      header,
      authorName,
      authorSurname,
      category,
      storedPdfUrl,
      storedCoverImageUrl,
    });
    return 0;
  }
);
