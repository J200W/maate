import React, { useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Dimensions,
    StatusBar,
} from "react-native";
import Toast from "react-native-toast-message";

import Textinput from "../components/Textinput";
import Button from "../components/Button";
import Header from "../components/Header";
import toastConfig from "../components/CustomToast";
import handleShowToast from "../components/Toast";
import handleRedirection from "../function/Handles";
import StatusBarCustom from "../components/StatusBarCustom";

const windowHeight = Dimensions.get("window").height;

export default function Forget({ navigation }) {
    const [email, setEmail] = useState("");

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleChangePass = () => {
        console.log("email : " + email);
        if (email === "") {
            handleShowToast("error", "Error", "Please enter your email");
        } else if (!isValidEmail(email)) {
            handleShowToast("error", "Error", "Invalid email address");
        } else {
            handleRedirection("Login", {}, navigation);
        }
    };

    return (
        <View
            style={styles.phone}
            softwareKeyboardLayoutMode={"pan"}
            scrollEnabled={false}
        >
            <StatusBarCustom backgroundColor="black" display="default" />
            <View style={styles.headerPosition}>
                <Header
                    title=""
                    goBack={() => handleRedirection("back", {}, navigation)}
                    type="menu"
                />
            </View>
            <View style={styles.container}>
                <Text numberOfLines={2} style={styles.title}>
                    Reset your password
                </Text>
                <Textinput placeholder={"Email"} setter={setEmail} />
            </View>
            <View style={styles.button}>
                <Button
                    text={"Change password"}
                    background={true}
                    onPress={handleChangePass}
                />
            </View>
            <Toast config={toastConfig} />
        </View>
    );
}

const styles = StyleSheet.create({
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
        zIndex: -1,
        flex: 1,
        flexDirection: "column",
    },

    container: {
        alignItems: "center",
        width: "100%",
        windowHeight: windowHeight,
    },
    status: {
        backgroundColor: "black",
        height: StatusBar.currentHeight,
        width: "100%",
        position: "absolute",
    },
    title: {
        fontSize: 50,
        fontWeight: "400",
        color: "#171417",
        marginTop: "20%",
        marginBottom: "10%",
        padding: 25,
        letterSpacing: 1,
        width: "86%",
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        justifyContent: "flex-start",
        width: "75%",
    },
    message: {
        fontSize: 12,
        fontWeight: "500",
        color: "#666666",
    },
    register: {
        fontSize: 12,
        fontWeight: "500",
        color: "#e84c5c",
    },
    button: {
        alignItems: "center",
        width: "100%",
        windowHeight: windowHeight,
        marginTop: "15%",
    },
});
