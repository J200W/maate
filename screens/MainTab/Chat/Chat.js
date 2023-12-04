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
        <View>
            {isFocused && (
                <StatusBar
                    backgroundColor="white"
                    animated={true}
                    barStyle="dark-content"
                />
            )}
            <SafeAreaView style={styles.phone}>
                <View style={styles.phoneContent}>
                    <View style={styles.header}>
                        <Header
                            back={false}
                            bg="white"
                            title="Maates"
                            goBack={() =>
                                handleRedirection("back", {}, navigation)
                            }
                            type="menu"
                        />
                    </View>
                    <View style={styles.chatListView}>
                        <ChatList
                            navigateToProfile={handleClickProfile}
                            navigateToChat={handleClickChat}
                            uid={1}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    phone: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },

    phoneContent: {
        flex: 1,
    },

    chatListView: {
        
        width: "100%",
        height: "100%",
    },

    header: {
        width: "100%",
        top: 0,
        zIndex: 1,
    },
});
