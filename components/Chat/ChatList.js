import React from "react";
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native";
import ChatBox from "./ChatBox";
import { FlashList } from "@shopify/flash-list";

var marginBottom = 0;
if (Dimensions.get("window").height > 800) {
    var marginBottom = 30;
} else {
    var marginBottom = 65;
}

export default function ChatList(props) {
    const n = 20;

    const chatList = [];

    for (let i = 0; i < n; i++) {
        chatList.push({
            id: i,
            connected: i % 2 == 0 ? true : false,
        });
    }

    const renderItem = ({ item }) => {
        return (
            <ChatBox
                navigateToProfile={(i) => props.navigateToProfile(i)}
                navigateToChat={(i) => props.navigateToChat(i)}
                connected={item.connected}
                key={item.id}
                id={item.id}
            />
        );
    };

    return (
        <View style={styles.chatList}>
            <FlashList
                data={chatList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                numColumns={1}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.contentContainer}
                estimatedItemSize={Dimensions.get("window").height}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    chatList: {
        width: "100%",
        height: "100%",
        paddingHorizontal: "2%",
        marginTop: 10,
        marginBottom: marginBottom,
    },
});
