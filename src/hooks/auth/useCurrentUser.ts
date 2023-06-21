import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/useStore";
// import { listenAuth } from "../../store/actions/auth/authActions";

export const useCurrentUser = () => {
  const dispatch = useAppDispatch();
  const { isSigndIn } = useAppSelector((state) => state.auth);
  useEffect(() => {
    // dispatch(listenAuth());
  }, []);
  return { isSigndIn };
};
