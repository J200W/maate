import React, { useState } from "react";
import { useIsFocused } from "@react-navigation/core";
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../../components/Header";
import AccountContent from "../../../components/Account/AccountContent";
import handleRedirection from "../../../function/Handles";
import handlePickImage from "../../../function/ImagePicker";
import InfiniteLinearGradient from "../../../components/Feed/InfiniteLinearGradient";

export default function Account({ navigation }) {
    const isFocused = useIsFocused();
    const [name, setName] = useState("Jacob");
    const [contentType, setContentType] = useState("video");
    const [image, setImage] = useState(null);
    const [imageUri, setImageUri] = useState(null);
    const [type, setType] = useState(null);
    const [check, setCheck] = useState(false);
    const linearGradientColor = [
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0.7)",
        "rgba(255,255,255,1)",
    ];

    const handleSwitchContent = () => {
        if (contentType == "photo") {
            setContentType("video");
        } else {
            setContentType("photo");
        }
    };

    const handleSettings = () => {
        handleRedirection("Settings", {}, navigation);
    };

    const handlePickPfp = async () => {
        await handlePickImage(setImage, setImageUri, setType, setCheck).then(
            () => {
                console.log(imageUri ? "imageUri 👍" : "no imageURI");
                console.log(image ? "image 👍" : "no image");
                console.log(type ? "type 👍" : "no type");
                console.log(check ? "check 👍" : "no check");
            }
        );
    };

    return (
        <View style={styles.phone}>
            {isFocused && <StatusBar backgroundColor="black" animated={true} />}
            <AccountContent type={contentType} />
            <View style={styles.rightButtons}>
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
                <Ionicons
                    onPress={handleSettings}
                    name="md-settings-sharp"
                    size={45}
                    color="#FFF"
                />
            </View>
            <InfiniteLinearGradient
                linearGradientColor={linearGradientColor}
                name={name}
                age={23}
            />
            <SafeAreaView style={styles.safeArea}>
                <Header
                    back={false}
                    bg="transparent"
                    title="Account"
                    goBack={() => handleRedirection("back", {}, navigation)}
                    type="image"
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    phone: {
        backgroundColor: "#000",
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
        position: "absolute",
    },

    rightButtons: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        right: 0,
        top: "55%",
        marginTop: 35,
        paddingRight: 35,
        paddingLeft: 35,
        height: "20%",
    },

    gradientFade: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "15.5%",
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
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "5%",
        color: "#000",
    },
});
