import React, { useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
} from "react-native";
import StatusBarCustom from "../../../components/StatusBarCustom";
import HeaderChat from "../../../components/Chat/HeaderChat";
import handleRedirection from "../../../function/Handles";
import conversation from "../../../function/Conversation";
import Message from "../../../components/Chat/Message";
import ChatInput from "../../../components/Chat/ChatInput";

export default function ChatRoom({ navigation }) {
    const [message, setMessage] = useState("");

    const handleMessage = (text) => {
        setMessage(text);
    };

    const handleSend = () => {
        const time = new Date().toLocaleTimeString().slice(0, -3);
        if (message != "") {
            conversation.push({
                message: message,
                type: "sent",
                time: time,
            });
            setMessage("");
        }
    };

    const handleClickProfile = (id) => {
        handleRedirection("ChatProfile", { id: id }, navigation);
    };

    return (
        <View style={styles.phone}>
            <StatusBarCustom backgroundColor="grey" display="default" />
            <View style={styles.headerPosition}>
                <HeaderChat
                    back={true}
                    bg="transparent"
                    img="Chat"
                    profileClick={handleClickProfile}
                    goBack={() => handleRedirection("back", {}, navigation)}
                />
            </View>
            <View style={styles.empty}></View>
            <ScrollView
                style={styles.chatList}
                ref={(ref) => {
                    this.scrollView = ref;
                }}
                onContentSizeChange={() =>
                    this.scrollView.scrollToEnd({ animated: false })
                }
            >
                {conversation.map((message, index) => {
                    return (
                        <Message
                            key={index}
                            message={message.message}
                            type={message.type}
                            time={message.time}
                        />
                    );
                })}
            </ScrollView>
            <ChatInput
                onSend={handleSend}
                setter={handleMessage}
                message={message}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    phone: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    headerPosition: {
        top: 0,
        position: "absolute",
        width: "100%",
        zIndex: 1,
        flex: 1,
        flexDirection: "column",
        marginTop: "11%",
    },

    empty: {
        height: "15.25%",
        width: "100%",
    },
});
