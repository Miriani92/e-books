import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { Image } from "expo-image";
import { BookScreen } from "../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ReadNavigator } from "./nested/ReadNavigator";
import { ListenNavigator } from "./nested/ListenNavigator";
import { ExploreNavigator } from "./nested/ExploreNavigator";
import { MyBooksData } from "../../constants/data";
import { ParametersNavigator } from "./nested/ParametersNavigator";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppSelector } from "../../hooks/app/useStore";

export const TabNavigator = () => {
  const { isListenSearch, isReadSearch } = useAppSelector(
    (state) => state.search
  );
  const currentBook = useAppSelector((state) => state.currentBook.payload);

  const transitionValue = useSharedValue(800);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: transitionValue.value }],
    };
  }, []);

  const currentReadingBookImage = currentBook?.storedCoverImageUrl
    ? currentBook.storedCoverImageUrl
    : MyBooksData[1].storedCoverImageUrl;

  const Tab = createBottomTabNavigator();
  const setOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      const iconColor = focused ? "#38bdf8" : "grey";
      if (route.name === "Read") {
        return (
          <MaterialCommunityIcons
            name="bookshelf"
            size={24}
            color={iconColor}
          />
        );
      }
      if (route.name === "Listen") {
        return <FontAwesome5 name="headphones" size={24} color={iconColor} />;
      }
      if (route.name === "currentReadingBook") {
        return (
          <Image
            source={currentReadingBookImage}
            className="w-9 h-14 shadow-md  -translate-y-4 rounded-md"
          />
        );
      }
      if (route.name === "Explore") {
        return (
          <MaterialCommunityIcons
            name="telescope"
            size={24}
            color={iconColor}
          />
        );
      }
      if (route.name === "Parameters") {
        return <Ionicons name="settings-sharp" size={24} color={iconColor} />;
      }
    },
    tabBarActiveTintColor: "#38bdf8",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  });
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    transitionValue.value = withTiming(0, { duration: 800 });
  }, []);

  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      <Tab.Navigator screenOptions={setOptions}>
        <Tab.Screen
          name="Read"
          component={ReadNavigator}
          options={() => ({
            tabBarStyle: {
              display: isReadSearch ? "none" : "flex",
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          name="Listen"
          component={ListenNavigator}
          options={() => ({
            tabBarStyle: {
              display: isListenSearch ? "none" : "flex",
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          name="currentReadingBook"
          options={{ tabBarLabel: "", tabBarStyle: { display: "none" } }}
          component={BookScreen}
        ></Tab.Screen>
        <Tab.Screen name="Explore" component={ExploreNavigator}></Tab.Screen>
        <Tab.Screen
          name="Parameters"
          component={ParametersNavigator}
        ></Tab.Screen>
      </Tab.Navigator>
    </Animated.View>
  );
};
