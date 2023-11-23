import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import ChatBox from "./ChatBox";

export default function ChatList(props) {

    const n = 20;

    const chatList = [];

    for (let i = 0; i < n; i++) {
        if (i % 5 == 0)
            chatList.push(
                <ChatBox navigateToProfile={(i) => props.navigateToProfile(i)} navigateToChat={(i) => props.navigateToChat(i)} connected={true} key={i} id={i} />
            );
        else
            chatList.push(
                <ChatBox navigateToProfile={(i) => props.navigateToProfile(i)} navigateToChat={(i) => props.navigateToChat(i)} connected={false} key={i} id={i} />
            );
    }

    return (
        <ScrollView style={styles.chatList}>
            {chatList}
        </ScrollView>
    );
}

const styles = StyleSheet.create({

})