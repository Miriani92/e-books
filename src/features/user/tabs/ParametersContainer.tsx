import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../../hooks/app/useStore";
import { useAppSelector } from "../../../hooks/app/useStore";
import { ParametersScreen } from "../../../screens";
import { handleSignOut } from "../../../store/actions/auth/authActions";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const ParametersContainer = () => {
  const navigation = useNavigation<any>();
  const { currentUser }: any = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch<any>(handleSignOut());
  };
  const navigateToDashboard = () => {
    navigation.push("Dashboard");
  };

  const transitionValue = useSharedValue(100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transitionValue.value }],
      marginTop: 50,
    };
  }, []);

  useEffect(() => {
    transitionValue.value = withSpring(0);
  }, []);

  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      <ParametersScreen
        navigateToDashboard={navigateToDashboard}
        handleSignOut={handleLogOut}
        currentUser={currentUser}
      />
    </Animated.View>
  );
};
