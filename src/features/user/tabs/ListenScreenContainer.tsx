import React, { useEffect } from "react";
import { ListenScreen } from "../../../screens";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const ListenScreenContainer = () => {
  const transitionValue = useSharedValue(100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transitionValue.value }],
      marginTop: 0,
    };
  }, []);
  useEffect(() => {
    transitionValue.value = withSpring(0);
  }, []);
  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      <ListenScreen />
    </Animated.View>
  );
};
