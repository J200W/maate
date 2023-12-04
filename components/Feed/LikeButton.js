import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
    withSpring,
} from "react-native-reanimated";

export default function LikeButton({
    color,
    selColor,
    size,
    setLiked,
    liked,
}) {
    const pressed = useSharedValue(1);

    useEffect(() => {
        if (liked) {
            pressed.value = withSpring(0);
        }
        else if (!liked) pressed.value = withSpring(1);
    }, [liked]);

    const handlePress = () => {
        pressed.value = withSpring(pressed.value ? 0 : 1);
        setLiked(!liked)
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
                <Ionicons name={"heart"} size={size} color={color} />
            </Animated.View>

            <Animated.View style={fillStyle}>
                <Ionicons name={"heart-outline"} size={size} color={selColor} />
            </Animated.View>
        </Pressable>
    );
}
