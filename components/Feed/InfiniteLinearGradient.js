import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Image } from "react-native";

export default function InfiniteLinearGradient({ linearGradientColor, name, age }) {
  return ( (
        <LinearGradient
            colors={linearGradientColor}
            style={styles.gradientFade}
        >
            <View style={styles.gradientContent}>
                <Image
                    source={require("../../assets/selma-pdp.png")}
                    style={styles.image}
                />
                <Text
                    style={styles.textNameAge}
                    adjustsFontSizeToFit={true}
                    numberOfLines={2}
                >
                    {name}, {age}
                </Text>
            </View>
        </LinearGradient>
    )
  )
}

const styles = StyleSheet.create({
    gradientFade: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "25%",
        zIndex: 1,
        paddingHorizontal: "5%",
    },

    gradientContent: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "3%",
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 200,
        marginRight: 20,
    },

    textNameAge: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    imageNameAge: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 35,
        marginTop: 35,
        width: "100%",
        marginLeft: 35,
    },
    textNameAge: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#000",
        width: "65%",
    },
})