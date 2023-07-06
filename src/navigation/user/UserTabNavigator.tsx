import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "../../features";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ReadNavigator } from "./nested/ReadNavigator";
import { ListenNavigator } from "./nested/ListenNavigator";
import { ExploreNavigator } from "./nested/ExploreNavigator";

export const TabNavigator = () => {
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

  return (
    <Tab.Navigator screenOptions={setOptions}>
      <Tab.Screen name="Read" component={ReadNavigator}></Tab.Screen>
      <Tab.Screen name="Listen" component={ListenNavigator}></Tab.Screen>
      <Tab.Screen name="Explore" component={ExploreNavigator}></Tab.Screen>
      <Tab.Screen name="Parameters" component={HomeContainer}></Tab.Screen>
    </Tab.Navigator>
  );
};
