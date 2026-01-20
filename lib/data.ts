export interface OnboardingDataProps {
  id: string
  title: string
  description: string
  image: any
}

export const data: OnboardingDataProps[] = [
  {
    id: "1",
    title: "Your favorite meals, all in one place",
    description: "Browse hundreds of restaurants, street spots, and hidden gems right around you.",
    image: require("@/assets/images/rider.png"),
  },
  {
    id: "2",
    title: "Fast, reliable delivery",
    description: "Get your orders delivered quickly and safely, right to your doorstep.",
    image: require("@/assets/images/rider.png"),
  },
  {
    id: "3",
    title: "Track your order in real-time",
    description: "Watch your order move from the kitchen to your doorstep with live tracking.",
    image: require("@/assets/images/rider.png"),
  },
]
