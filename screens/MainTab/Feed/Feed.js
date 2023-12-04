import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/core";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InfiniteScroll from "../../../components/Feed/InfiniteScroll";
import Header from "../../../components/Header";

export default function Feed({ navigation }) {
    const isFocused = useIsFocused();
    const [name, setName] = useState("Name");
    const [age, setAge] = useState("18");

    return (
        <View>
            {isFocused && (
                <StatusBar
                    backgroundColor="#FFF"
                    animated={true}
                    barStyle="dark-content"
                />
            )}
            <SafeAreaView style={styles.phone}>
                <View>
                    <InfiniteScroll name={name} />
                    <View style={styles.header}>
                        <Header
                            back={false}
                            bg="transparent"
                            title="Find your love"
                            goBack={() =>
                                handleRedirection("back", {}, navigation)
                            }
                            type="feed"
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
    },

    header: {
        width: "100%",
        position: "absolute",
        top: 0,
        zIndex: 1,
    },
});
