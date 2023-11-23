import React from "react";
import { useIsFocused } from "@react-navigation/core";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import Header from "../../../components/Header";
import ChatList from "../../../components/Chat/ChatList";
import handleRedirection from "../../../function/Handles";

export default function Chat({ navigation }) {
    const isFocused = useIsFocused();
    const handleClickChat = (id) => {
        handleRedirection("ChatRoom", { id: id }, navigation);
    };

    const handleClickProfile = (id) => {
        handleRedirection("ChatProfile", { id: id }, navigation);
    };

    return (
        <View style={styles.phone}>
            {isFocused && <StatusBar backgroundColor="#fff" animated={true} barStyle="dark-content" />}
            <SafeAreaView style={styles.safeArea}>
                <Header
                    back={false}
                    bg="transparent"
                    title="Chat"
                    goBack={() => handleRedirection("back", {}, navigation)}
                    type="menu"
                />
                <ChatList
                    navigateToProfile={handleClickProfile}
                    navigateToChat={handleClickChat}
                    uid={1}
                />
            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    phone: {
        backgroundColor: "#FFF",
        flex: 1,
        flexDirection: "column",
    },

    safeArea: {
        top: 0,
        width: "100%",
        zIndex: 1,
        flex: 1,
        flexDirection: "column",
        marginTop: 10,
    },

    empty: {
        height:"10%",
        width: "100%",
    },
});
