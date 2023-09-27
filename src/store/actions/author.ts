import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, set } from "firebase/database";
import { db } from "../../utils/firebase";
import { auth } from "../../utils/firebase";
import type { AddBookPayload } from "./addBook";

type Author = Pick<AddBookPayload, "authorName" | "authorSurname" | "id">;

const URL = "authentication/allMemebers/authors/";

export const addAuthor = createAsyncThunk(
  "booksCategory/addAuthor",
  async ({ authorName, authorSurname, id }: Author) => {
    const { uid } = auth.currentUser;
    const authorRef = ref(db, URL + uid);
    get(authorRef).then((snapshot) => {
      if (!snapshot.exists()) {
        // if specified url author does not exitst create if not pass
        set(authorRef, {
          id,
          uid,
          authorName,
          authorSurname,
        });
      }
    });
    return;
  }
);
