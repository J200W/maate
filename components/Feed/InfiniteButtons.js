import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";
import LikeButton from "./LikeButton";

export default function InfiniteButtons({
    handleSwitchContent,
    contentType,
    doubleTap,
    setDoubleTap,
}) {
    // HANDLE LIKE

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (doubleTap) {
            setLiked(true)
            console.log("double tapped: " + liked);
        };
    }, [doubleTap]);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
        }
        else if (!liked) setLiked(true);
        setDoubleTap();
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

            <LikeButton
                color="#e84c5c"
                selColor="#FFF"
                size={50}
                onPress={handleLike}
                setLike={(bool) => setLiked(bool)}
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
