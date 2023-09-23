import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { db } from "../../utils/firebase";

type SearchAuthor = {
  queryWord: string;
};

const URL = "authentication/allMemebers/authors";

export const setSearch = (state, action) => {
  const screen = action.payload;
  if (screen === "ListenScreen") {
    state.isListenSearch = !state.isListenSearch;
  }
  if (screen === "ReadScreen") {
    state.isReadSearch = !state.isReadSearch;
  }
};
export const searchAuthor = createAsyncThunk(
  "myBooks/addBook",
  async ({ queryWord }: SearchAuthor) => {
    try {
      // needs to chnage, search done on the client side
      const authors = await get(ref(db, URL)).then((snapshot) => {
        if (snapshot.exists()) {
          const result = [];
          const payload = snapshot.val();
          const data = Object.entries(payload).map(([key, value]) => value);
          data.forEach((item: any) => {
            if (
              item.authorName.startsWith(queryWord) ||
              item.authorSurname.startsWith(queryWord)
            ) {
              result.push(item);
            }
          });
          return result;
        } else {
          console.log("No data available");
        }
      });
      return authors;
    } catch (error) {
      console.log("$$error", error);
      return error;
    }
  }
);
