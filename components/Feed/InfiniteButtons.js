import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

export default function InfiniteButtons({
    handleSwitchContent,
    contentType,
    doubleTap,
    setDoubleTap,
}) {
    const [liked, setLiked] = useState(false);

    // HANDLE LIKE

    // useEffect(() => {
    //     if (doubleTap) setLiked(true);
    // }, [doubleTap]);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <View style={styles.rightButtons}>
            <Ionicons
                onPress={handleSwitchContent}
                name={
                    contentType == "photo"
                        ? "camera-outline"
                        : "videocam-outline"
                }
                size={50}
                color="#FFF"
            />
            <Ionicons
                onPress={handleLike}
                name={liked ? "ios-heart" : "ios-heart-outline"}
                size={50}
                color={liked ? "#E84C5C" : "#FFF"}
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
