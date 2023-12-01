import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

export default function InfiniteButtons({
    handleSwitchContent,
    contentType,
    doubleTap,
    setDoubleTap,
}) {
    // HANDLE LIKE

    // useEffect(() => {
    //     if (doubleTap) setLiked(true);
    // }, [doubleTap]);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <View style={styles.rightButtons}>

            <AnimatedButton
                name="videocam-outline"
                selName="camera-outline"
                color="#FFF"
                selColor="#FFF"
                size={50}
                onPress={handleSwitchContent}
            />

            <AnimatedButton
                name="heart-outline"
                selName="heart"
                color="#FFF"
                selColor="#e84c5c"
                size={50}
            />
            <Ionicons name="ellipsis-vertical" size={40} color="#FFF" />
        </View>
    );
}

const styles = StyleSheet.create({
    rightButtons: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        right: 0,
        top: "30%",
        marginTop: 35,
        paddingRight: 35,
        paddingLeft: 35,
        height: "30%",
    },
});
