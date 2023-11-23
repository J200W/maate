import {
    View,
    StyleSheet,
    Image,
    Animated,
    Easing,
    ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Video } from "expo-av";
import { Dimensions } from "react-native";

export default function InfiniteContent({ item, isCurrentItem, type }) {
    const animatedValue = new Animated.Value(0);
    const [loadedImage, setLoadedImage] = useState(false);
    const [loadedVideo, setLoadedVideo] = useState(false);

    // HANDLE ANIMATION
    
    useEffect(() => {
        const decreaseAnimation = Animated.timing(animatedValue, {
            toValue: 0,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: false,
        });

        const increaseAnimation = Animated.timing(animatedValue, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: false,
        });

        const sequenceAnimation = Animated.sequence([
            decreaseAnimation,
            increaseAnimation,
        ]);

        sequenceAnimation.start();
    }, [type]);

    return (
        <View style={[{ flex: 1, height: Dimensions.get("window").height }]}>
            {type == "photo" ? (
                <>
                    <ActivityIndicator
                        style={[
                            styles.activityIndicator,
                            {
                                display:
                                    loadedImage
                                        ? "none"
                                        : "default",
                            },
                        ]}
                        size="large"
                        color="#999"
                    />
                    <Image
                        style={[styles.video, isCurrentItem && { flex: 1 }]}
                        source={item.image}
                        resizeMode="cover"
                        onLoad={() => {
                            setLoadedImage(true);
                        }}
                    />
                </>
            ) : (
                <>
                    <ActivityIndicator
                        style={[
                            styles.activityIndicator,
                            {
                                display:
                                    loadedVideo
                                        ? "none"
                                        : "default",
                            },
                        ]}
                        size="large"
                        color="#999"

                    />
                    <Video
                        style={[styles.video, isCurrentItem && { flex: 1 }]}
                        source={item.video}
                        resizeMode="cover"
                        shouldPlay={isCurrentItem}
                        isLooping
                        onLoad={() => {
                            setLoadedVideo(true);
                        }}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    video: {
        width: Dimensions.get("window").width,
        height: "100%",
    },

    activityIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EEE",
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
    },
});
