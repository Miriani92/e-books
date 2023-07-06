import React from "react";
import { SafeAreaView } from "react-native";

export const ScreenContainer = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal;
}) => {
  return <SafeAreaView className="w-11/12">{props.children}</SafeAreaView>;
};
