import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Image } from "react-native";
import { scaleFont } from "../../function/Font";

export default function InfiniteLinearGradient({
    linearGradientColor,
    name,
    age,
    hobbies = [],
}) {
    const hobbiesList = [...hobbies];
    var linearHeight = hobbiesList.length == 0 ? "30%" : "33%";

    const toRender = [];

    hobbiesList.map((hobby) => {
        toRender.push(
            <View style={styles.hobby}>
                <Text style={styles.hobbyText}>{hobby}</Text>
            </View>
        );
    });

    return (
        <LinearGradient
            colors={linearGradientColor}
            style={[styles.gradientFade, { height: linearHeight }]}
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
            <View style={styles.hobbies}>{toRender}</View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientFade: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        zIndex: 1,
        paddingHorizontal: "7.5%",
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

    imageNameAge: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 35,
        marginTop: 35,
        width: "100%",
        marginLeft: 35,
    },
    textNameAge: {
        fontSize: scaleFont(20),
        fontWeight: "bold",
        color: "#000",
        width: "65%",
    },

    hobbies: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 5,
        width: "100%",
    },

    hobby: {
        backgroundColor: "#e84c5c",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 10,
    },

    hobbyText: {
        fontSize: scaleFont(13),
        color: "#F6F6F6",
    },
});
