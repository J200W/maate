import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scaleFont } from "../../function/Font";

export default function ChatInput({ setter, message, onSend }) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    const handleOnFocus = () => {
      setIsFocused(true)
    }
  
    const handleOnBlur = () => {
      setIsFocused(false)
    }
    const handleSetterChange = (value) => {
        setter(value)
        handleHasContent(value)
    }

    const handleHasContent = (e) => {
        if(e=="") setHasContent(false)
        else setHasContent(true)
    }

    const handleSend = () => {
        onSend()
        setHasContent(false)
        setter("")
    }

    return (
        <View style={styles.textBox}>
            <View style={styles.textBoxLeft}>
                <Ionicons name="camera" size={30} color="black" />
                <TextInput  
                    onFocus={handleOnFocus} onBlur={handleOnBlur} 
                    onChangeText={handleSetterChange}
                    cursorColor={'#777777'}
                    style={[styles.textInput]}   
                    placeholder="Write a message"
                    multiline={true}
                    value={message}
                />
                <Ionicons name="image" size={30} color="black" />
            </View>
            <View style={styles.textBoxRight}>
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Ionicons name="send" size={25} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        backgroundColor: "#FFF",
        borderTopColor: "#EEEEEE",
        paddingBottom: 15,
        paddingTop: 10,
        opacity: 0.95,
    },

    textBoxLeft: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "80%",
        borderColor: "#DDD",
        borderRadius: 50,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        maxHeight: 70,
    },

    textBoxRight: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
        flex: 0.25,
    },

    sendButton: {
        padding: 10,
        borderRadius: 200,
    },

    textInput: {
        width: "70%",
        marginHorizontal: 10,
        maxHeight: 50,
        textAlign: "left",
        fontSize: scaleFont(15),
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },
})