import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { Image } from "react-native";
import { BookScreen } from "../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "../../features";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ReadNavigator } from "./nested/ReadNavigator";
import { ListenNavigator } from "./nested/ListenNavigator";
import { ExploreNavigator } from "./nested/ExploreNavigator";
import { MyBooksData } from "../../constants/data";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const TabNavigator = () => {
  const transitionValue = useSharedValue(800);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: transitionValue.value }],
    };
  }, []);

  const singleBookImage = MyBooksData[1].imageSource;
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
      if (route.name === "SingleBook") {
        // hardcoded -- needs to be changed
        return (
          <Image
            source={singleBookImage}
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
        <Tab.Screen name="Read" component={ReadNavigator}></Tab.Screen>
        <Tab.Screen name="Listen" component={ListenNavigator}></Tab.Screen>
        <Tab.Screen
          name="SingleBook"
          options={{ tabBarLabel: "", tabBarStyle: { display: "none" } }}
          component={BookScreen}
        ></Tab.Screen>
        <Tab.Screen name="Explore" component={ExploreNavigator}></Tab.Screen>
        <Tab.Screen name="Parameters" component={HomeContainer}></Tab.Screen>
      </Tab.Navigator>
    </Animated.View>
  );
};
