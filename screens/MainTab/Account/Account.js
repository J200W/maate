import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/core";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../../../components/Header";
import AccountContent from "../../../components/Account/AccountContent";
import handleRedirection from "../../../function/Handles";
import handlePickImage from "../../../function/ImagePicker";
import handleVideoPicker from "../../../function/VideoPicker";
import InfiniteLinearGradient from "../../../components/Feed/InfiniteLinearGradient";
import { scaleFont } from "../../../function/Font";

export default function Account({ navigation }) {
    const isFocused = useIsFocused();
    const [name, setName] = useState("Jacob");
    const [contentType, setContentType] = useState("video");
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [imageUri, setImageUri] = useState(null);
    const [type, setType] = useState(null);
    const [check, setCheck] = useState(false);
    const linearGradientColor = [
        "rgba(255,255,255,0)",
        "rgba(255,255,255,0.7)",
        "rgba(255,255,255,1)",
    ];

    // HANDLE SWITCH CONTENT TYPE (PHOTO OR VIDEO)

    const handleSwitchContent = () => {
        if (contentType == "photo") {
            setContentType("video");
        } else {
            setContentType("photo");
        }
    };

    // HANDLE SETTINGS

    const handleSettings = () => {
        handleRedirection("Settings", {}, navigation);
    };

    // UPDATE IMAGE AND VIDEO WHEN PICKED

    useEffect(() => {
        setVideo(video);
        setImage(image);
    }, [image, video]);

    const handleEdit = async () => {
        if (contentType == "photo") {
            await handlePickImage(setImage, setImageUri, setType, setCheck);
        } else {
            await handleVideoPicker(setVideo);
        }
    };

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
                    <View style={styles.header}>
                        <Header
                            back={false}
                            bg="transparent"
                            title="My Account"
                            goBack={() =>
                                handleRedirection("back", {}, navigation)
                            }
                            type="image"
                        />
                    </View>
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
                            onPress={handleEdit}
                            name="pencil"
                            size={50}
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
                        hobbies={[
                            "Skating",
                            "Music",
                            "Sport",
                            "Cinema",
                            "Travel",
                        ]}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    phone: {
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F6F6F6",
    },

    header: {
        width: "100%",
        position: "absolute",
        top: 0,
        zIndex: 1,
    },

    rightButtons: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        right: 0,
        top: "30%",
        marginTop: 35,
        paddingRight: 35,
        paddingLeft: 35,
        height: "30%",
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
        fontSize: scaleFont(20),
        fontWeight: "bold",
        marginLeft: "5%",
        color: "#000",
    },
});
