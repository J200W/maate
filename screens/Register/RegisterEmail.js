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

export default function RegisterEmail({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const route = useRoute();

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = () => {
        setEmail(email.trim());
        if (!isValidEmail(email)) {
            handleShowToast("error", "Error", "Invalid email address");
        } else if (
            password !== confirmPassword ||
            password === "" ||
            confirmPassword === ""
        ) {
            handleShowToast("error", "Error", "Passwords don't match");
        } else if (password.length < 6) {
            handleShowToast(
                "error",
                "Error",
                "Password must be at least 8 characters long"
            );
        } else {
            const toReturn = {
                ...route.params,
                email: email,
                password: password,
            };
            console.log("RegisterEmail : " + JSON.stringify(toReturn));
            handleRedirection("RegisterName", toReturn, navigation);
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
                <Text style={styles.title}>Email {"\n"}Address</Text>
                <Textinput placeholder="Email" setter={setEmail} />
                <Textinput
                    isPassword={true}
                    placeholder="Password"
                    setter={setPassword}
                />
                <Textinput
                    isPassword={true}
                    placeholder="Confirm password"
                    setter={setConfirmPassword}
                />
                <View style={styles.smallText}>
                    <Text style={styles.smallTextMessage}>
                        Already have an account ?
                    </Text>
                    <Text
                        onPress={() => {
                            navigation.navigate("Login", { email: "" });
                        }}
                        style={styles.smallTextLink}
                    >
                        {" "}
                        Log In !
                    </Text>
                </View>
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
        width: "12%",
    },

    screenContent: {
        width: "100%",
        alignItems: "center",
        zIndex: -1,
    },

    smallText: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "80%",
        marginTop: 5,
    },
    smallTextMessage: {
        fontSize: scaleFont(12),
        fontWeight: "500",
        color: "#666666",
    },
    smallTextLink: {
        fontSize: scaleFont(12),
        fontWeight: "500",
        color: "#e84c5c",
    },
});
