import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import Button from "../../components/Button";
import StatusBarCustom from "../../components/StatusBarCustom";
import Header from "../../components/Header";
import VideoPickerComp from "../../components/Register/VideoPickerComp";
import handleShowToast from "../../components/Toast";
import toastConfig from "../../components/CustomToast";
import handleRedirection from "../../function/Handles";
import handleVideoPicker from "../../function/VideoPicker";

export default function RegisterDate({ navigation }) {
    const [video, setVideo] = useState(null);
    const route = useRoute();

    const handlePick = async () => {
        await handleVideoPicker(setVideo);
    };

    const handleSubmit = () => {
        if (video === null) {
            handleShowToast(
                "error",
                "Error",
                "Please choose a video to continue"
            );
        } else {
            const toReturn = { ...route.params, video: video };
            console.log("RegisterVideo : " + JSON.stringify(toReturn));
            handleRedirection("Home", toReturn, navigation);
        }
    };

    return (
        <View
            style={[
                styles.phone,
                {
                    marginTop: !video ? "10%" : 0,
                    backgroundColor: video ? "#000000" : "#F6F6F6",
                },
            ]}
        >
            <StatusBarCustom
                backgroundColor="black"
                display={video ? "none" : "default"}
            />
            <View
                style={[
                    styles.headerPosition,
                    { display: video ? "none" : "default" },
                ]}
            >
                <View style={styles.progressionBar}>
                    <View style={styles.progressionBarFull}></View>
                </View>
                <Header
                    title=""
                    goBack={() => handleRedirection("back", {}, navigation)}
                    type="menu"
                />
            </View>
            <View style={styles.screenContent}>
                {video === null ? (
                    <>
                        <Text style={styles.title}>Action!</Text>
                        <Text style={styles.subTitle}>
                            Choose your best video
                        </Text>
                        <Button
                            text="Upload a video"
                            fill={true}
                            onPress={handlePick}
                        />
                    </>
                ) : (
                    <VideoPickerComp
                        video={video}
                        setVideo={setVideo}
                        submit={handleSubmit}
                    />
                )}
            </View>
            <Toast config={toastConfig} />
        </View>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#000",
    },

    title: {
        fontSize: 60,
        letterSpacing: 2,
        width: "80%",
        marginVertical: "10%",
        textAlign: "center",
    },

    subTitle: {
        fontSize: 17,
        fontWeight: "500",
        color: "#AAA",
        width: "80%",
        marginBottom: "10%",
        textAlign: "center",
    },

    phone: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "column",
        height: "100%",
    },

    headerPosition: {
        top: 0,
        position: "absolute",
        width: "100%",
    },

    progressionBar: {
        backgroundColor: "#CCCCCC",
        height: 8,
        width: "100%",
        marginTop: 10,
    },
    progressionBarFull: {
        backgroundColor: "#e84c5c",
        height: 8,
        width: "100%",
    },

    screenContent: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginTop: "15%",
        zIndex: -1,
    },
});
