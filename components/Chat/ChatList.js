import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import ChatBox from "./ChatBox";
import { FlashList } from "@shopify/flash-list";

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
            <ChatBox navigateToProfile={(i) => props.navigateToProfile(i)} navigateToChat={(i) => props.navigateToChat(i)} connected={item.connected} key={item.id} id={item.id} />
        );
    }

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
        flex: 1,
        width: "100%",
        paddingHorizontal: "2%",
        marginTop: "5%",
        backgroundColor: "#FFF",
    },
})