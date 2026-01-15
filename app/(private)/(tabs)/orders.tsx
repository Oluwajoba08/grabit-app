import classicBurger from '@/assets/images/classic-burger.jpg'
import creamCake from '@/assets/images/cream-cake.jpg'
import creamDonuts from '@/assets/images/cream-donuts.jpg'
import friesWDip from '@/assets/images/fries-w-dip.jpg'
import meatyBurger from '@/assets/images/meaty-burger.jpg'
import Button from '@/components/ui/Button'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Image } from 'expo-image'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface TabProps {
  key: 'cart' | 'ongoing' | 'completed';
  label: string;
}

const TABS: TabProps[]  = [
  { key: 'cart', label: 'Cart'},
  { key: 'ongoing', label: 'Ongoing'},
  { key: 'completed', label: 'Completed'},
]

const Orders = () => {
  const [activeTab, setActiveTab] = useState<TabProps["key"]>('cart')

  const cartItems = [
    { id: '1', name: 'Cream cake', price: 2800, image: creamCake , description: 'Delivering to X2cc UY Ozumba Mbadiwe way Eti osa Lagos', quantity: 2 },
    { id: '2', name: 'Classic Burger', price: 2000, image: classicBurger , description: 'Delivering to X2cc UY Ozumba Mbadiwe way Eti osa Lagos', quantity: 4 },
    { id: '3', name: 'Fries and Dip', price: 5000, image: friesWDip , description: 'Delivering to X2cc UY Ozumba Mbadiwe way Eti osa Lagos', quantity: 1 },
    { id: '4', name: 'Meaty burger', price: 15000, image: meatyBurger , description: 'Delivering to X2cc UY Ozumba Mbadiwe way Eti osa Lagos', quantity: 2 },
    { id: '5', name: 'Pizza', price: 12000, image: meatyBurger , description: 'Delivering to X2cc UY Ozumba Mbadiwe way Eti osa Lagos', quantity: 3 },
    { id: '6', name: 'Vegetables', price: 7000, image: creamDonuts , description: 'Delivering to X2cc UY Ozumba Mbadiwe way Eti osa Lagos', quantity: 3 },
  ]

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, headerTitleAlign: 'center', headerShadowVisible: false }} />
      <View style={styles.tabContainer}>
        {TABS.map((tab) => (
          <Pressable 
            key={tab.key} 
            style={[styles.tab, { backgroundColor: activeTab === tab.key ? '#333' : 'transparent' }]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text style={{ color: activeTab === tab.key ? '#fff' : '#000' }}>{tab.label}</Text>
          </Pressable>
        ))}
      </View>
      {activeTab === 'cart' && (
        <FlatList 
        data={cartItems} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.cartItem}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                  <Image source={item.image} contentFit='cover' style={styles.image} />
                  <View style={{ gap: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                    <Text>{item.price}{" "}|{" "}{item.quantity}{" "}items</Text>
                  </View>
                </View>
                <TouchableOpacity style={{ padding: 5, borderRadius: 20 }} onPress={() => console.log("delete")}>
                  <Feather name='trash' size={24} color={'#d41515'} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
                <MaterialIcons name='bike-scooter' size={24} />
                <Text style={{ fontSize: 14, marginTop: 5 }}>{item.description}</Text>
              </View>
              <Button onPress={() => console.log("checkout")} text='Checkout' />
            </View>
          )
        }} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  cartItem: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  image: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginVertical: 20,
  },
  tab: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
})

export default Orders