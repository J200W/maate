import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
    withSpring,
} from "react-native-reanimated";

export default function AnimatedButton({
    name,
    selName,
    color,
    selColor,
    size,
    onPress = () => {},
}) {
    const pressed = useSharedValue(0);

    const handlePress = () => {
        pressed.value = withSpring(pressed.value ? 0 : 1);
        onPress();
    };

    const outlineStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(
                        pressed.value,
                        [0, 1],
                        [1, 0],
                        Extrapolate.CLAMP
                    ),
                },
            ],
        };
    });

    const fillStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: pressed.value,
                },
            ],
        };
    });

    return (
        <Pressable onPress={handlePress}>
            <Animated.View
                style={[StyleSheet.absoluteFillObject, outlineStyle]}
            >
                <Ionicons name={name} size={size} color={color} />
            </Animated.View>

            <Animated.View style={fillStyle}>
                <Ionicons name={selName} size={size} color={selColor} />
            </Animated.View>
        </Pressable>
    );
}
