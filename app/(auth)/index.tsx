import Button from '@/components/ui/Button'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 600, fontSize: 24 }}>Onboarding screen</Text>
      <Link href={'/(auth)/login'} asChild>
        <Button text='Get Started' />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Onboarding