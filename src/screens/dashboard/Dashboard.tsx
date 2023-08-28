import React from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { Input } from "../../components/dashboard/Input";
import { useCustomReducer } from "../../hooks/dashboard/useCustomReducer";
import { ref, set } from "firebase/database";
import { db } from "../../utils/firebase";

const ADD_NAME = "add_name";
const ADD_URL = "add_url";
const RESET = "reset";

const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NAME:
      return { ...state, ...payload };
    case ADD_URL:
      return { ...state, ...payload };
    case RESET:
      return { ...state, ...payload };
  }
};
export const Dashboard = () => {
  const [state, dispatch] = useCustomReducer(reducer, {});
  const handleInputChanged = (e: any, name: any, actionType: any) => {
    dispatch({ type: actionType, payload: { [name]: e } });
  };

  const addToDabase: any = async (state: any) => {
    const { name } = state;
    try {
      await set(ref(db, name + "hello/miriani"), { message: "ravaxart" });
      console.log("added to dataabse");
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  const handleSubmit = async () => {
    addToDabase(state).then(() =>
      dispatch({ type: RESET, payload: { name: "" } })
    );
  };

  return (
    <View className="w-full self-center h-full">
      <View className="self-center w">
        <Input
          style="bg-grey-light w-52 h-10 rounded-md"
          value={state?.name}
          onChange={(e) => handleInputChanged(e, "name", ADD_NAME)}
          placeHolder="Name"
          type="name"
        />
        <TouchableOpacity
          onPress={handleSubmit}
          className="w-32 h-10 bg-sky-dark self-center rounded-md justify-center mt-2"
        >
          <Text className="text-white-slate self-center text-xl tracking-widest">
            Text
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
