import { Colors } from "@/constants/theme"
import { OnboardingDataProps } from "@/lib/data"
import { Image } from "expo-image"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SharedValue } from "react-native-reanimated"
import Button from "./ui/Button"

interface Props {
  item: OnboardingDataProps
  index: number
  x: SharedValue<number>
}

const OnboardingItem = ({ item, index, x }: Props) => {
  const handleNext = () => {
    console.log("Next")
  }

  return (
    <View>
      <Image source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {/* <Dot /> */}
      <Button text="Continue" style={styles.button} onPress={() => handleNext()} />
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: Colors.light.icon,
    textAlign: "center",
    marginTop: 30,
  },
  description: {
    fontSize: 20,
    color: Colors.light.icon,
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    position: "absolute",
    bottom: 20,
  },
})
