import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Feed from "./MainTab/Feed/Feed";
import Chat from "./MainTab/Chat/Chat";
import Account from "./MainTab/Account/Account";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function Main({ navigation }) {

    const styleTab = StyleSheet.create({
        backgroundColor: "#FFF",
        paddingVertical: 5,
        elevation: 0,
        width: "100%",
        height: "auto",
        position: "absolute",
        bottom: 0,
    });

    const tabBarStyle  = StyleSheet.create({
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height : "100%",
    });

  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#e84c5c",
        tabBarInactiveTintColor: "black",
        tabBarStyle: [styleTab, null],
        tabBarIndicatorStyle: {
          backgroundColor: "#F28792",
        },
        tabBarPressColor: "#FFE3E6",
      }}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={30}
              color={focused ? color : "black"}
            />
          ),
          tabBarIconStyle: tabBarStyle,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "chatbox" : "chatbox-outline"}
              size={30}
              color={focused ? color : "black"}
            />
          ),
          tabBarIconStyle: tabBarStyle,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={30}
              color={focused ? color : "black"}
            />
          ),
          tabBarIconStyle: tabBarStyle,
        }}
      />
    </Tab.Navigator>
  );
}
