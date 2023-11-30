import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Login from "./screens/Login";
import RegisterEmail from "./screens/Register/RegisterEmail";
import RegisterName from "./screens/Register/RegisterName";
import RegisterDate from "./screens/Register/RegisterDate";
import RegisterGender from "./screens/Register/RegisterGender";
import RegisterOrientation from "./screens/Register/RegisterOrientation";
import RegisterHobbies from "./screens/Register/RegisterHobbies";
import RegisterPhoto from "./screens/Register/RegisterPhoto";
import RegisterVideo from "./screens/Register/RegisterVideo";
import Forget from "./screens/Forget";

import Main from "./screens/Main";

import Settings from "./screens/Settings";

import Feed from "./screens/MainTab/Feed/Feed";

import Chat from "./screens/MainTab/Chat/Chat";
import ChatRoom from "./screens/MainTab/Chat/ChatRoom";
import ChatProfile from "./screens/MainTab/Chat/ChatProfile";

import Account from "./screens/MainTab/Account/Account";
import Hobbies from "./screens/MainTab/Account/Hobbies";

const Stack = createStackNavigator();

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications


const header = () => null;

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

const forSlide = ({ current }) => ({
    cardStyle: {
        transform: [
            {
                translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [900, 0], // Adjust the values as needed
                    extrapolate: "clamp",
                }),
            },
        ],
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* Auth Screen */}
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ header: header, cardStyleInterpolator: forFade }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ header: header, cardStyleInterpolator: forFade }}
                />

                <Stack.Screen
                    name="Forget"
                    component={Forget}
                    options={{ header: header, cardStyleInterpolator: forFade }}
                />

                {/* Register Screen */}
                <Stack.Screen
                    name="RegisterEmail"
                    component={RegisterEmail}
                    options={{ header: header, cardStyleInterpolator: forFade }}
                />
                <Stack.Screen
                    name="RegisterName"
                    component={RegisterName}
                    options={{
                        header: header,
                        cardStyleInterpolator: forSlide,
                    }}
                />
                <Stack.Screen
                    name="RegisterDate"
                    component={RegisterDate}
                    options={{
                        header: header,
                        cardStyleInterpolator: forSlide,
                    }}
                />
                <Stack.Screen
                    name="RegisterGender"
                    component={RegisterGender}
                    options={{
                        header: header,
                        cardStyleInterpolator: forSlide,
                    }}
                />
                <Stack.Screen
                    name="RegisterOrientation"
                    component={RegisterOrientation}
                    options={{
                        header: header,
                        cardStyleInterpolator: forSlide,
                    }}
                />
                <Stack.Screen
                    name="RegisterHobbies"
                    component={RegisterHobbies}
                    options={{
                        header: header,
                        cardStyleInterpolator: forSlide,
                    }}
                />
                <Stack.Screen
                    name="RegisterPhoto"
                    component={RegisterPhoto}
                    options={{
                        header: header,
                        cardStyleInterpolator: forSlide,
                    }}
                />
                <Stack.Screen
                    name="RegisterVideo"
                    component={RegisterVideo}
                    options={{
                        header: header,
                        cardStyleInterpolator: forSlide,
                    }}
                />

                {/* Main Screen */}
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        header: header,
                        cardStyleInterpolator: forFade,
                        gestureEnabled: false,
                    }}
                />

                {/* Settings Screen */}

                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{ header: header, cardStyleInterpolator: forSlide }}
                />

                {/* Feed Screen */}

                <Stack.Screen
                    name="Feed"
                    component={Feed}
                    options={{ header: header, cardStyleInterpolator: forFade }}
                />

                {/* Chat Screen */}
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{ header: header, cardStyleInterpolator: forFade }}
                />
                <Stack.Screen
                    name="ChatRoom"
                    component={ChatRoom}
                    options={{ header: header, cardStyleInterpolator: forSlide }}
                />

                <Stack.Screen
                    name="ChatProfile"
                    component={ChatProfile}
                    options={{ header: header, cardStyleInterpolator: forSlide }}
                />

                {/* Account Screen */}

                <Stack.Screen
                    name="Account"
                    component={Account}
                    options={{ header: header, cardStyleInterpolator: forFade }}
                />

                <Stack.Screen
                    name="Hobbies"
                    component={Hobbies}
                    options={{ header: header, cardStyleInterpolator: forSlide }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
