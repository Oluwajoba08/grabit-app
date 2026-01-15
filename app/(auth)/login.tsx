import Button from '@/components/ui/Button'
import { Colors } from '@/constants/theme'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Text style={{ fontSize: 13 }}>Enter your details below to log in to your Repora account.</Text>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontWeight: 600 }}>Email</Text>
        <TextInput 
          keyboardType='email-address' 
          placeholder='Your email' 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={{ position: 'relative', marginTop: 12 }}>
        <Text style={{ fontWeight: 600 }}>Password</Text>
        <TextInput
          secureTextEntry={!passwordVisible}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Enter your password'
          value={password}
          onChangeText={setPassword}
          style={styles.input} 
        />
        <Pressable style={styles.eyeToggle} onPress={() => setPasswordVisible((value) => !value)}>
          <Ionicons name={passwordVisible ? 'eye-outline' : 'eye-off-outline'} size={24} />
        </Pressable>
      </View>
      <Text style={{ textAlign: 'right', fontWeight: 500, marginVertical: 10 }}>Forgot Password?</Text>
      <Button text='Log In' />
      <View style={{ flexDirection: 'row', marginTop: 10, gap: 5, width: '100%', alignItems: 'center' }}>
        <View style={styles.marginLine}></View>
        <Text style={{ color: '#777' }}>or continue with</Text>
        <View style={styles.marginLine}></View>
      </View>
      <View style={styles.otherOptionsContainer}>
        <Pressable style={styles.otherOptions}>
          <FontAwesome name='google' size={24} />
          <Text style={{ fontWeight: 500 }}>Google</Text>
        </Pressable>
        <Pressable style={styles.otherOptions}>
          <FontAwesome name='apple' size={24} />
          <Text style={{ fontWeight: 500 }}>Apple</Text>
        </Pressable>
      </View>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>Don't have an account?{" "}<Link href={'/signup'} style={{ color: Colors.primary }}>Sign In</Link></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 64,
    marginBottom: 5,
  },
  input: {
    padding: 12,
    backgroundColor: '#ddd',
    marginTop: 5,
    borderRadius: 8,
  },
  marginLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  otherOptionsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    gap: 10,
  },
  otherOptions: {
    flexGrow: 1,
    padding: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  eyeToggle: { 
    position: 'absolute',
    right: 10,
    top: 30,
    padding: 5,
    justifyContent:'center',
    alignItems: 'center',
  }
})

export default Login