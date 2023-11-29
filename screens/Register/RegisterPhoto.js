import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import Button from "../../components/Button";
import StatusBarCustom from "../../components/StatusBarCustom";
import Header from "../../components/Header";
import ImagePickerComp from "../../components/Register/ImagePickerComp";
import handleShowToast from "../../components/Toast";
import toastConfig from "../../components/CustomToast";
import handleRedirection from "../../function/Handles";
import { scaleFont } from "../../function/Font";

export default function RegisterDate({ navigation }) {
    const [image, setImage] = useState(null);
    const [imageUri, setImageUri] = useState("");
    const [type, setType] = useState("");
    const [photoCheck, setPhotoCheck] = useState(false);
    const route = useRoute();

    const handleSubmit = () => {
        if (photoCheck === false) {
            handleShowToast(
                "error",
                "Error",
                "Please choose a photo to continue"
            );
        } else {
            const toReturn = { ...route.params, image: imageUri, type: type };
            console.log("RegisterPhoto : " + JSON.stringify(toReturn));
            handleRedirection("RegisterVideo", toReturn, navigation);
        }
    };

    return (
        <View style={styles.phone}>
            <StatusBarCustom backgroundColor="black" display="default" />
            <View style={styles.headerPosition}>
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
                <Text style={styles.title}>Hello!</Text>
                <Text style={styles.subTitle}>Choose your best picture</Text>
                <ImagePickerComp
                    setCheck={setPhotoCheck}
                    setImage={setImage}
                    image={image}
                    setImageUri={setImageUri}
                    setType={setType}
                    type={type}
                />

                <Button text="Next" fill={true} onPress={handleSubmit} />
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
        fontSize: scaleFont(45),
        letterSpacing: 2,
        width: "80%",
        marginTop: "10%",
        marginBottom: "5%",
        textAlign: "center",
    },

    subTitle: {
        fontSize: scaleFont(16),
        fontWeight: "400",
        color: "#AAA",
        width: "80%",
        marginBottom: "10%",
        textAlign: "center",
    },

    phone: {
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
        flex: 1,
        flexDirection: "column",
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
        width: "86%",
    },

    screenContent: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginBottom: 50,
        zIndex: -1,
    },
});
