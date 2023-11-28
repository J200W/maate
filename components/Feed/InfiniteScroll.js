import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
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

    const linearGradientColor = [
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0.7)",
        "rgba(255,255,255,1)",
    ];

    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [contentType, setContentType] = useState("video");

    
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
            setDoubleTaped(true);    
            console.log(doubleTaped);       
        }
        setLastPress(new Date().getTime());
    };

    // HANDLE SWITCH CONTENT [PHOTO/VIDEO]

    const handleSwitchContent = () => {
        setContentType(contentType == "photo" ? "video" : "photo");
    };

    // HANDLE FLATLIST

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
                    setDoubleTaped(false);
        if (viewableItems.length > 0) {
            const firstVisibleItem = viewableItems[0];
            setCurrentIndex(firstVisibleItem.index);
        }
    }).current;


    const renderItem = ({ item, index }) => {
        const isCurrentItem = index === currentIndex;

        return (
            // <TouchableOpacity activeOpacity={1} onPress={on2Press}>
            <TouchableOpacity activeOpacity={1}>
                <InfiniteContent
                    item={item}
                    isCurrentItem={isCurrentItem}
                    type={contentType}
                />
                <InfiniteButtons
                    handleSwitchContent={handleSwitchContent}
                    contentType={contentType}
                    // doubleTap={doubleTaped}
                    // setDoubleTap={(d) => setDoubleTaped(d)}
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
        />
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
});
