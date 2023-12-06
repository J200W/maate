import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Animated,
    View,
} from "react-native";

import InfiniteContent from "./InfiniteContent";
import InfiniteButtons from "./InfiniteButtons";
import InfiniteLinearGradient from "./InfiniteLinearGradient";
import { FlatList } from "react-native-gesture-handler";

export default function InfiniteScroll(props) {
    const { name } = props;
    const [doubleTaped, setDoubleTaped] = useState(false);
    const [array, setArray] = useState([
        {
            id: 1,
            video: require("../../assets/emily-vid.mp4"),
            image: require("../../assets/emily-picture.png"),
            name: "Emily",
        },
        {
            id: 2,
            video: require("../../assets/lily-vid.mp4"),
            image: require("../../assets/lily-picture.png"),
            name: "Lily",
        },
        {
            id: 3,
            video: require("../../assets/jacob-vid.mp4"),
            image: require("../../assets/jacob-picture.png"),
            name: "Jacob",
        },
        {
            id: 4,
            video: require("../../assets/selma-vid.mp4"),
            image: require("../../assets/selma-picture.png"),
            name: "Selma",
        },
    ]);

    const [liked, setLiked] = useState(false);
    const [heartVisible, setHeartVisible] = useState(false);
    const heartOpacity = useRef(new Animated.Value(0)).current;

    const linearGradientColor = [
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0.7)",
        "rgba(255,255,255,1)",
    ];

    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [contentType, setContentType] = useState("photo");

    const [lastPress, setLastPress] = useState(0);

    // HANDLE DOUBLE TAP
    useEffect(() => {
        const getInitialState = () => {
            setLastPress(0);
        };
        getInitialState();
    }, []);

    const on2Press = () => {
        var delta = new Date().getTime() - lastPress;
        if (delta < 300) {
            setLiked(true);
            showHeartAnimation();
            console.log("double tapped !");
        }
        setLastPress(new Date().getTime());
    };

    const showHeartAnimation = () => {
        setHeartVisible(true);

        Animated.sequence([
            Animated.timing(heartOpacity, {
                toValue: 1,
                duration: 500, // You can adjust the duration
                useNativeDriver: false,
            }),
            Animated.parallel([
                Animated.spring(heartOpacity, {
                    toValue: 0,
                    friction: 4,
                    tension: 40,
                    useNativeDriver: false,
                }),
                Animated.timing(heartOpacity, {
                    toValue: 0,
                    duration: 500,
                    delay: 300, // Adjust the delay for a bounce effect
                    useNativeDriver: false,
                }),
            ]),
        ]).start(() => {
            setHeartVisible(false);
            heartOpacity.setValue(0);
        });
    };

    const heartStyle = {
        position: "absolute",
        width: 100,
        height: 100,
        alignSelf: "center",
        opacity: heartOpacity,
        transform: [
            {
                translateY: heartOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0],
                }),
            },
            {
                scale: heartOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }),
            },
        ],
        zIndex: 1000,
    };

    useEffect(() => {
        console.log("liked: " + liked);
    }, [liked]);

    const handleLike = (bool) => {
        setLiked(bool);
        console.log("default tapped !");
    };

    // HANDLE SWITCH CONTENT [PHOTO/VIDEO]

    const handleSwitchContent = () => {
        setContentType(contentType == "photo" ? "video" : "photo");
    };

    // HANDLE FLATLIST

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const firstVisibleItem = viewableItems[0];
            setCurrentIndex(firstVisibleItem.index);
        }
        // console.log(viewableItems);
    }).current;

    const renderItem = ({ item, index }) => {
        const isCurrentItem = index === currentIndex;

        return (
            <TouchableOpacity activeOpacity={1} onPress={on2Press}>
                <InfiniteContent
                    item={item}
                    isCurrentItem={isCurrentItem}
                    type={contentType}
                />
                <InfiniteButtons
                    handleSwitchContent={handleSwitchContent}
                    contentType={contentType}
                    liked={liked}
                    setLiked={(bool) => handleLike(bool)}
                />
                <InfiniteLinearGradient
                    linearGradientColor={linearGradientColor}
                    name={item.name}
                    age={23}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <FlatList
                renderItem={renderItem}
                data={array}
                extraData={array}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                    minimumViewTime: 1000,
                }}
                pagingEnabled={true}
                keyExtractor={(item, index) => index.toString()}
                style={styles.videoFlatList}
                ref={flatListRef}
                snapToAlignment="center"
                decelerationRate="fast"
                bounces={false}
            />
            {heartVisible && (
                <View style={styles.heartStyle}>
                    <Animated.Image
                        style={heartStyle}
                        source={require("../../assets/like.png")} // Replace with your heart icon
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    videoFlatList: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: "#FFF",
    },

    rightButtons: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        right: 0,
        top: "40%",
        marginTop: 35,
        paddingRight: 35,
        paddingLeft: 35,
        height: "30%",
        zIndex: 100,
    },

    heartStyle: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        top: Dimensions.get("window").height*0.45,
        backgroundColor: "black",
    },
});
