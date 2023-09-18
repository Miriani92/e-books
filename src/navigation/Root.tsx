import React, { useEffect } from "react";
import { GuestNavigator } from "./auth/GuestNavigator";
import { UserNavigator } from "./user/UserNavigator";
import { useCurrentUser } from "../hooks/auth/useCurrentUser";

export const Root = () => {
  const { isSigndIn }: any = useCurrentUser();
  const setNavigator = () => {
    if (isSigndIn) {
      return <UserNavigator />;
    } else {
      return <GuestNavigator />;
    }
  };
  return setNavigator();
};
