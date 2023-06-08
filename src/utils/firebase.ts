import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCtthfCfopMZvoT0hf4Ny1Ew-YVnImEC3s",
  authDomain: "e-books-ef3b6.firebaseapp.com",
  projectId: "e-books-ef3b6",
  storageBucket: "e-books-ef3b6.appspot.com",
  messagingSenderId: "100334615658",
  appId: "1:100334615658:web:314439b6ba78576fb05e13",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase(app);
export const storage = getStorage();
