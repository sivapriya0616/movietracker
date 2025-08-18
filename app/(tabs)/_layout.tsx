import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Tabs } from "expo-router";
import {images} from "@/constants/images"
export default function _Layout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: 'white' },
      headerShown: false,
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: "Home",
        tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
      }}
    />
    <Tabs.Screen
      name="search"
      options={{
        title: "Search",
        tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />,
      }}
    />
    <Tabs.Screen
      name="saved"
      options={{
        title: "Saved",
        tabBarIcon: ({ color }) => <FontAwesome name="bookmark" size={24} color={color} />,
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
      }}
    />
  </Tabs>
);
}
