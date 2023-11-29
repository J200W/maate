import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Button from "../components/Button";
import StatusBarCustom from "../components/StatusBarCustom";
import Header from "../components/Header";
import Textinput from "../components/Textinput";
import handleRedirection from "../function/Handles";
import { scaleFont } from "../function/Font";

const windowHeight = Dimensions.get("window").height;

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.phone}>
            <StatusBarCustom backgroundColor="grey" display="default" />
            <View style={styles.headerPosition}>
                <Header
                    title=""
                    goBack={() => handleRedirection("back", {}, navigation)}
                    type="menu"
                />
            </View>
            <Text style={styles.title}>Welcome {"\n"}back!</Text>
            <Textinput placeholder="Email" setter={setEmail} />
            <Textinput placeholder="Password" setter={setPassword} />
            <View style={styles.smallText}>
                <Text style={styles.smallTextMessage}>
                    Don't have an account ?
                </Text>
                <Text
                    onPress={() => {
                        navigation.navigate("RegisterEmail", { email: "" });
                    }}
                    style={styles.smallTextLink}
                >
                    {" "}
                    Register !
                </Text>
            </View>
            <View style={styles.smallText}>
                <Text style={styles.smallTextMessage}>Forget password ?</Text>
                <Text
                    onPress={() => {
                        navigation.navigate("Forget");
                    }}
                    style={styles.smallTextLink}
                >
                    {" "}
                    Reset password
                </Text>
            </View>
            <View style={styles.buttonLogin}>
                <Button
                    text="Log In"
                    fill={true}
                    onPress={() => handleRedirection("Main", {}, navigation)}
                />
            </View>
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
        zIndex: 1,
        flex: 1,
        flexDirection: "column",
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
