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
                {isFocused && <StatusBar backgroundColor="black" animated={true} />}
                <SafeAreaView style={styles.safeArea}>
                    <Header
                        back={false}
                        bg="transparent"
                        title="Chat"
                        goBack={() => handleRedirection("back", {}, navigation)}
                        type="menu"
                    />
                </SafeAreaView>
                <ChatList
                    navigateToProfile={(i) => handleClickProfile(i)}
                    navigateToChat={(i) => handleClickChat(i)}
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

    headerPosition: {
        marginTop: 8,
        width: "100%",
    },
});
