import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "./reducers/auth";
import readerChart from "./reducers/readerChatSlice";
import lastUploadedbook from "./reducers/addBook";
import booksCategory from "./reducers/booksCategory";
import search from "./reducers/search";
import user from "./reducers/user";
import allBooks from "./reducers/allBooks";
import categories from "./reducers/categories";
import readingList from "./reducers/readingList";
// import currentBook from "./reducers/currentReadingBook";
import currentReadingBook from "./reducers/currentReadingBook";

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
};
const currentReadingBookPersistConfig = {
  key: "currentReadingBook",
  storage: AsyncStorage,
};

const auth = persistReducer(authPersistConfig, authSlice);
const currentBook = persistReducer(
  currentReadingBookPersistConfig,
  currentReadingBook
);

export const store = configureStore({
  reducer: {
    auth,
    lastUploadedbook,
    readerChart,
    booksCategory,
    search,
    user,
    allBooks,
    categories,
    readingList,
    currentBook,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
