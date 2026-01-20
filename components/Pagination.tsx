import { OnboardingDataProps } from "@/lib/data"
import React from "react"
import { StyleSheet, View } from "react-native"
import { SharedValue } from "react-native-reanimated"

interface Props {
  data: OnboardingDataProps[]
  x: SharedValue<number>
}

const Pagination = ({ data, x }: Props) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        return (
          // <Dot key={index} index={index} x={x} />
          <View></View>
        )
      })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
})
