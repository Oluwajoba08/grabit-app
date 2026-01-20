import { Colors } from "@/constants/theme"
import React from "react"
import { StyleSheet, useWindowDimensions } from "react-native"
import Animated from "react-native-reanimated"

const Dot = ({}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions()

  // const animatedDotStyle = useAnimatedStyle(() => {
  //     const widthAnimation = interpolate(
  //         x.value,
  //         [
  //             (index - 1) * SCREEN_WIDTH,
  //             index * SCREEN_WIDTH,
  //             (index + 1) * SCREEN_WIDTH,
  //         ],
  //         [10, 20, 10]
  //     )
  // })

  return <Animated.View style={styles.dot} />
}

export default Dot

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.primary,
  },
})
