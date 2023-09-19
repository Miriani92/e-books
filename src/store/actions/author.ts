import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../utils/firebase";
import { ref, set, push } from "firebase/database";
import { auth } from "../../utils/firebase";
import type { AddBookPayload } from "./addBook";

type Author = Pick<AddBookPayload, "authorName" | "authorSurname">;

const URL = "authentication/allMemebers/authors/";

export const addAuthor = createAsyncThunk(
  "booksCategory/addAuthor",
  async ({ authorName, authorSurname }: Author) => {
    const { uid } = auth.currentUser;
    const authorRef = ref(db, URL + `${authorName}-${authorSurname}_${uid}`);
    set(authorRef, {
      uid,
      authorName,
      authorSurname,
    });
    return 0;
  }
);
