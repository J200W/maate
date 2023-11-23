import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import StatusBarCustom from "../components/StatusBarCustom";
import handleRedirection from "../function/Handles";
import SettingContent from "../components/Account/SettingContent";

export default function Settings({ navigation }) {
    const goToHobbies = () => {
        handleRedirection("Hobbies", {}, navigation);
    };

    return (
        <View style={styles.phone}>
            <StatusBarCustom backgroundColor="grey" display="default" />
            <View style={styles.headerPosition}>
                <Header
                    back={true}
                    bg="transparent"
                    title="Settings"
                    goBack={() => handleRedirection("back", {}, navigation)}
                    type="menu"
                />
            </View>
            <View style={styles.empty}></View>
            <SettingContent navigateTo={goToHobbies} />
        </View>
    );
}

const styles = StyleSheet.create({
    phone: {
        backgroundColor: "#FFF",
        flex: 1,
        flexDirection: "column",
    },

    headerPosition: {
        top: 0,
        position: "absolute",
        width: "100%",
        zIndex: 1,
        flex: 1,
        flexDirection: "column",
        marginTop: "15%",
    },

    empty: {
        height: "15%",
        width: "100%",
    },
});
