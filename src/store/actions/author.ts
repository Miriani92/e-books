import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../utils/firebase";
import { ref, set, push } from "firebase/database";
import { auth } from "../../utils/firebase";
import type { AddBookPayload } from "./addBook";

type Author = Pick<AddBookPayload, "authorName" | "authorSurname">;

const URL = "authentication/allMemebers/authors/";

export const addAuthor = createAsyncThunk(
  "booksCategory/addBook",
  async ({ authorName, authorSurname }: Author) => {
    const { uid } = auth.currentUser;
    const bookCategoryRef = push(
      ref(db, URL + `${authorName}_${authorSurname}_${uid}`)
    );
    set(bookCategoryRef, {
      authorName,
      authorSurname,
    });
    return 0;
  }
);
