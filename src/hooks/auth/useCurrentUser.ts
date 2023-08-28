// import { useAppSelector } from "../app/useStore";
import { useEffect } from "react";
import { useAppSelector } from "../app/useStore";
import { useAppDispatch } from "../app/useStore";
import { handleSignIn } from "../../store/actions/auth/auth";

export const useCurrentUser = () => {
  const { currentUser, isSigndIn }: any = useAppSelector((state) => state.auth);
  const dispatch: any = useAppDispatch();
  const cachedCredentials: any = {
    email: currentUser?.email,
    password: currentUser?.userPassword,
  };

  const logUser = async () => {
    dispatch(handleSignIn(cachedCredentials));
  };
  useEffect(() => {
    logUser();
  }, []);

  return { isSigndIn };
};
