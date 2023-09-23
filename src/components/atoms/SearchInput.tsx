import React, { useEffect } from "react";
import { View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

type SearchProps = {
  inputQuery: string;
  setQuery: (value: string) => void;
  setActive?(value: boolean): void;
  style?: string;
  isActive?: boolean;
  handleSearchInput?: (value: string) => void;
};

export const SearchInput: React.FC<SearchProps> = ({
  setQuery,
  inputQuery,
  handleSearchInput,
  setActive,
  style,
  isActive,
}) => {
  const handleSearchTouched = () => {
    if (!isActive) {
      setActive(true);
    }
  };

  const handleSearchClosed = () => {
    setQuery("");
    Keyboard.dismiss();
    setActive(false);
  };
  const transitionValue = useSharedValue(60);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${transitionValue.value}%`,
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      transitionValue.value = withTiming(100, { duration: 300 });
    } else {
      transitionValue.value = withTiming(60);
    }
  }, [isActive]);

  return (
    <Animated.View
      className={`self-center w-56 px-2  h-10 flex-row align-middle justify-center rounded-lg bg-white-slate ${
        isActive && style
      }`}
      style={animatedStyle}
    >
      {isActive && (
        <TouchableOpacity
          className="self h-full text-center flex-row align-middle justify-center"
          onPress={handleSearchClosed}
        >
          <AntDesign
            name="left"
            size={22}
            color="grey"
            style={{ alignSelf: "center" }}
          />
        </TouchableOpacity>
      )}
      <View
        className={`${
          isActive ? "pl-2 mr-4" : ""
        } h-full text-center flex-row align-middle justify-center `}
      >
        <AntDesign
          name="search1"
          size={22}
          color="grey"
          style={{ alignSelf: "center" }}
        />
      </View>
      <View className="w-5/6 h-10  bg-white-slate rounded-lg align-middle justify-center">
        <TextInput
          value={inputQuery}
          autoCapitalize="none"
          placeholder="Search Authors"
          className="pl-1"
          onTouchStart={handleSearchTouched}
          onChangeText={(value) => handleSearchInput(value)}
        />
      </View>
    </Animated.View>
  );
};
