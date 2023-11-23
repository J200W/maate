import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatBox(props) {

    return (
        <TouchableOpacity onPress={() => props.navigateToChat(props.id)} style={styles.chatBox}>
            <TouchableOpacity onPress={() => props.navigateToProfile(props.id)}  style={styles.chatBoxLeft}>
                <Image source={ require('../../assets/emily-pdp.png') } 
                    style={styles.image}
                />
                <View style={[styles.connected, {backgroundColor: props.connected ? "#cc0000" : "transparent"}]}></View>
            </TouchableOpacity>
            <View style={styles.chatBoxMid}>
                <Text style={styles.name}>Emily</Text>
                <View style={styles.lastMessage}>
                    <Text style={styles.lastMessageText} numberOfLines={1}>Me too, Jacob! See you on Friday! 🙌</Text>
                    <Text style={styles.hours}>• 4h</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => console.log("go to Emily chat setting")} style={styles.chatBoxRight}>
                <Ionicons name='ellipsis-vertical' size={30} color='#000' />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    chatBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: "2%",
        height: 90,
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderBottomColor: "#F6F6F6",
    },

    chatBoxLeft: {
        width: "20%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    connected: {
        width: 15,
        height: 15,
        borderRadius: 50,
        position: "absolute",
        top: "70%",
        right: 0,
        borderWidth: 2,
        borderColor: "#FFF",
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },

    chatBoxMid: {
        width: "65%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: "2%",
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },

    lastMessage: {
        fontSize: 15,
        flexDirection: "row",
        width: "100%",
    },

    hours: {
        fontSize: 15,
        color: "#AAA",
    },

    lastMessageText: { 
        fontSize: 15,
        width: "90%",
        color: "#AAA",
    },

    chatBoxRight: {
        width: "20%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
})