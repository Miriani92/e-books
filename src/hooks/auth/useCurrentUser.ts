import { useEffect } from "react";
import { AppState } from "react-native";
import { loadRecentUploadedBooks } from "../../store/actions/allBooks";
import { useAppSelector } from "../app/useStore";
import { useAppDispatch } from "../app/useStore";
import { handleSignIn } from "../../store/actions/auth";
import { getReadingList } from "../../store/actions/readingList";

export const useCurrentUser = () => {
  const { currentUser, isSigndIn }: any = useAppSelector((state) => state.auth);
  const dispatch: any = useAppDispatch();
  const cachedCredentials: any = {
    email: currentUser?.email,
    password: currentUser?.userPassword,
  };

  const onAppOpen = async () => {
    try {
      await dispatch(handleSignIn(cachedCredentials));
      await dispatch(loadRecentUploadedBooks());
      await dispatch(getReadingList());
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    onAppOpen();
  }, [AppState.isAvailable]);

  return { isSigndIn };
};
