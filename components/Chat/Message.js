import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scaleFont } from "../../function/Font";

export default function Message(props) {
    const { message, type, time } = props;

    return (
        <View style={styles.messageBox}>
            {type == "sent" ? 
                <View style={styles.messageSent}>
                    <Text style={[styles.messageText, {color: "#FFF",}]}>{message}</Text>
                    <Text style={[styles.messageTime, {color: "#FFF",textAlign: "right"}]}>{time}</Text>
                </View> 
                : 
                <View style={styles.messageReceived}>
                    <Text style={[styles.messageText, {color: "#000"}]}>{message}</Text>
                    <Text style={[styles.messageTime, {textAlign: "left"}]}>{time}</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    messageBox: {
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: "5%",
        paddingVertical: "2%",
    },
    messageSent: {
        backgroundColor: "#E84C5C",
        borderRadius: 30,
        borderBottomRightRadius: 0,
        padding: "5%",
        marginLeft: "20%",
        alignSelf: "flex-end",
    },
    messageReceived: {
        backgroundColor: "#F6F6F6",
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        padding: "5%",
        marginRight: "20%",
        alignSelf: "flex-start",
    },
    messageText: {
        fontSize: scaleFont(15),
    },
    messageTime: {
        fontSize: scaleFont(9),
        fontWeight: "bold",
        marginTop: 5,
    },
})