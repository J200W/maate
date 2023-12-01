import React from "react";
import { useIsFocused } from "@react-navigation/core";
import {
    StyleSheet,
    View,
    StatusBar,
    SafeAreaView,
    Dimensions,
} from "react-native";
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
            <>
                {isFocused && (
                    <StatusBar backgroundColor="black" animated={true} />
                )}
                <SafeAreaView style={styles.safeArea}>
                    <Header
                        back={false}
                        bg="white"
                        title="Maates"
                        goBack={() => handleRedirection("back", {}, navigation)}
                        type="menu"
                    />
                </SafeAreaView>
                <ChatList
                    navigateToProfile={handleClickProfile}
                    navigateToChat={handleClickChat}
                    uid={1}
                />
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    phone: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFF",
    },

    safeArea: {
        top: 0,
        width: "100%",
        backgroundColor: "white",
        zIndex: 1,
        flexDirection: "column",
        marginTop: 10,
    },
});
