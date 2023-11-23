import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/core";
import { StyleSheet, SafeAreaView, View, Image, TouchableWithoutFeedback, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InfiniteScroll from "../../../components/Feed/InfiniteScroll";
import Header from "../../../components/Header";

export default function Feed({ navigation }) {
    const isFocused = useIsFocused();
    const [name, setName] = useState("Name");
    const [age, setAge] = useState("18");

    return (
        <View style={styles.phone}>
            <>
                {isFocused && <StatusBar backgroundColor="black" animated={true} />}
                <InfiniteScroll name={name} />
                <SafeAreaView style={styles.safeArea}>
                    <Header
                        back={false}
                        bg="transparent"
                        title="Find your love"
                        goBack={() => handleRedirection("back", {}, navigation)}
                        type="image"
                    />
                </SafeAreaView>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    phone: {
        backgroundColor: "#F6F6F6",
        flex: 1,
        flexDirection: "column",
    },

    safeArea: {
        top: 0,
        position: "absolute",
        width: "100%",
        zIndex: 1,
        flex: 1,
        flexDirection: "column",
        marginTop: 10,
    },
});
