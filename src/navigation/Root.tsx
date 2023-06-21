import React from "react";
import { GuestNavigator } from "./GuestNavigator";
import { UserNavigator } from "./UserNavigator";
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
