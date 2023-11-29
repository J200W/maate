import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { scaleFont } from "../function/Font";

export default function ButtonComp(props) {

    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
    }
    const handlePressOut = () => {
        setIsPressed(false);
    }
    if (props.fill)
    return (
        <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={props.onPress}
        style={[
            styles.buttonContainer, 
            {backgroundColor: isPressed ? "#CB2939" : "#E84C5C", 
            transform: isPressed ? [{scale: 0.95}] : [{scale: 1},
            ],
            borderColor: isPressed ? "#CB2939" : "#E84C5C",
            borderWidth: 2}
            ]}
        >
        <Text style={[styles.buttonText, {color: "#FFFFFF"} ]}>
            {props.text}
        </Text>
        </Pressable>
    )
    else
    return (
        <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={props.onPress}
        style={[
            styles.buttonContainer, 
            {backgroundColor: isPressed ? "#EEE" : "#FFFFFF", 
            transform: isPressed ? [{scale: 0.95}] : [{scale: 1}],
            borderColor: isPressed ? "#CB2939" : "#E84C5C",
            borderWidth: 2},
            ]}
        >
        <Text style={[styles.buttonText, {color: "#E84C5C",}]}>
            {props.text}
        </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: "10%",
        margin: 10,
    },

    buttonText: {
        fontSize: scaleFont(15),
        textAlign: "center",
        fontWeight: "bold",
    },
});