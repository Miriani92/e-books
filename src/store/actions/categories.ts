import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../utils/firebase";
import { get, ref, limitToFirst, query, child } from "firebase/database";

const URL = "/authentication/userReadable/books/categories";

export const loadByCategories = createAsyncThunk(
  "booksCategory/loadCategories",
  async (_, { getState }) => {
    try {
      const {
        categories: { searchWords },
      }: any = getState();

      const getBooksByCategories = async () => {
        const result = [];
        let idx = 0;
        while (idx < searchWords.length) {
          const word = searchWords[idx];
          const categoryRef = query(ref(db, URL + `/${word}`), limitToFirst(5));
          await get(categoryRef).then((snapshot) => {
            if (snapshot.exists()) {
              const payload = snapshot.val();
              const data = Object.entries(payload).map(([key, value]) => value);
              result.push(...data);
              return;
            }
          });
          idx++;
        }
        for (let i = result.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
      };
      return await getBooksByCategories();
    } catch (error) {
      console.log("error:", error);
    }
  }
);
