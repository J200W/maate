import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import Button from "../../components/Button";
import StatusBarCustom from "../../components/StatusBarCustom";
import Header from "../../components/Header";
import RadioButton from "../../components/RadioButton";
import handleShowToast from "../../components/Toast";
import toastConfig from "../../components/CustomToast";
import handleRedirection from "../../function/Handles";
import { scaleFont } from "../../function/Font";

export default function RegisterOrientation({ navigation }) {
    const [orientation, setOrientation] = useState(null);
    const route = useRoute();

    const options = [{ value: "Women" }, { value: "Men" }, { value: "Both" }];

    const handleSubmit = () => {
        if (orientation === null) {
            handleShowToast(
                "error",
                "Error",
                "Please choose an orientation to continue"
            );
        } else {
            const toReturn = { ...route.params, orientation: orientation };
            console.log("RegisterOrientation : " + JSON.stringify(toReturn));
            handleRedirection("RegisterHobbies", toReturn, navigation);
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
                <Text style={styles.title}>Who do you{"\n"}want to see ?</Text>
                <RadioButton
                    data={options}
                    onSelect={(value) => setOrientation(value)}
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
        fontSize: scaleFont(33),
        letterSpacing: 2,
        width: "80%",
        marginVertical: "10%",
    },

    subTitle: {
        fontSize: scaleFont(20),
        fontWeight: "500",
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
        width: "60%",
    },

    screenContent: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginBottom: 20,
        zIndex: -1,
    },

    textInput: {
        letterSpacing: 3,
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: "75%",
        height: 60,
        textAlign: "center",
        fontSize: scaleFont(20),
        fontWeight: "bold",
    },
});
