import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import Button from "../../components/Button";
import StatusBarCustom from "../../components/StatusBarCustom";
import Header from "../../components/Header";
import Textinput from "../../components/Textinput";
import handleShowToast from "../../components/Toast";
import toastConfig from "../../components/CustomToast";
import handleRedirection from "../../function/Handles";
import { scaleFont } from "../../function/Font";

export default function RegisterName({ navigation }) {
    const [name, setName] = useState("");
    const route = useRoute();

    function isValidName(name) {
        // Allow letters, spaces, and hyphens
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([- ]?[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
        return nameRegex.test(name);
    }

    const handleSubmit = () => {
        setName(name.trim());
        if (!isValidName(name)) {
            handleShowToast("error", "Error", "Invalid name");
        } else {
            const toReturn = { ...route.params, name: name };
            console.log("RegisterName : " + JSON.stringify(toReturn));
            handleRedirection("RegisterDate", toReturn, navigation);
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
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.subTitle}>
                    Tell the world your name.{"\n"}Be careful, you won't be able
                    to change it afterwards.
                </Text>
                <Textinput placeholder="Name" setter={setName} />
                <View style={styles.buttonLogin}>
                    <Button text="Next" fill={true} onPress={handleSubmit} />
                </View>
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
        marginVertical: "10%",
    },

    subTitle: {
        fontSize: scaleFont(14),
        fontWeight: "400",
        color: "#AAA",
        width: "80%",
        marginBottom: "10%",
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
        width: "24%",
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
