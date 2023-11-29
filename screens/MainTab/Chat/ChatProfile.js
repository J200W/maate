import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import StatusBarCustom from "../../../components/StatusBarCustom";
import Header from "../../../components/Header";
import handleRedirection from "../../../function/Handles";
import ChatProfileContent from "../../../components/Chat/ChatProfileContent";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { scaleFont } from "../../../function/Font";

export default function ChatProfile({ navigation }) {
    const [name, setName] = useState("Emily");
    const [contentType, setContentType] = useState("video");

    const handleSwitchContent = () => {
        if (contentType == "photo") {
            setContentType("video");
        } else {
            setContentType("photo");
        }
    };

    return (
        <View style={styles.phone}>
            <StatusBarCustom backgroundColor="grey" display="default" />
            <View style={styles.headerPosition}>
                <Header
                    back={true}
                    bg="transparent"
                    title=""
                    goBack={() => handleRedirection("back", {}, navigation)}
                    type="image"
                />
            </View>
            <ChatProfileContent type={contentType} />
            <View style={styles.rightButtons}>
                <Ionicons name="ellipsis-vertical" size={45} color="#FFF" />
                <Ionicons
                    onPress={handleSwitchContent}
                    name={
                        contentType == "photo"
                            ? "camera-outline"
                            : "videocam-outline"
                    }
                    size={55}
                    color="#FFF"
                />
            </View>
            <LinearGradient
                colors={[
                    "rgba(255,255,255,0)",
                    "rgba(255,255,255,0.7)",
                    "rgba(255,255,255,1)",
                ]}
                style={styles.gradientFade}
            >
                <View style={styles.imageNameAge}>
                    <Image
                        source={require("../../../assets/emily-pdp.png")}
                        style={styles.image}
                    />
                    <Text
                        style={styles.textNameAge}
                        adjustsFontSizeToFit={true}
                        numberOfLines={2}
                    >
                        {name}, 23
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    phone: {
        backgroundColor: "#000",
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

    rightButtons: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        right: 0,
        top: "45%",
        marginTop: 35,
        paddingRight: 35,
        paddingLeft: 35,
        height: "20%",
    },

    gradientFade: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "25%",
        zIndex: 1,
        paddingHorizontal: "5%",
    },

    imageNameAge: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        paddingHorizontal: "5%",
        paddingVertical: "2%",
        zIndex: 1,
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },

    textNameAge: {
        fontSize: scaleFont(20),
        fontWeight: "bold",
        marginLeft: "5%",
        color: "#000",
    },
});
