import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "./reducers/auth/auth";
import readerChart from "./reducers/chart/readerChatSlice";
import lastUploadedbook from "./reducers/addbook/addBook";

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const auth = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: { auth, lastUploadedbook, readerChart },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
