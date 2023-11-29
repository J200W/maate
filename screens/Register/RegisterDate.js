import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { useRoute } from "@react-navigation/native";
import moment from "moment";
import Toast from "react-native-toast-message";

import Button from "../../components/Button";
import StatusBarCustom from "../../components/StatusBarCustom";
import Header from "../../components/Header";
import handleShowToast from "../../components/Toast";
import toastConfig from "../../components/CustomToast";
import handleRedirection from "../../function/Handles";
import { scaleFont } from "../../function/Font";

export default function RegisterDate({ navigation }) {
    const [date, setDate] = useState(null);
    const route = useRoute();

    const isValidBirthdate = (birthdate) => {
        var dateFormat = "YYYY-MM-DD";
        return moment(birthdate, dateFormat, true).isValid();
    };

    function age(birthday) {
        if (birthday === null) return NaN;
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const handleSubmit = () => {
        const user_age = age(date);
        const isValidBirthdateBool = isValidBirthdate(date);
        if (!isValidBirthdateBool || user_age > 100 || user_age === NaN) {
            handleShowToast("error", "Error", "Invalid birthdate");
        } else if (user_age < 18) {
            handleShowToast(
                "error",
                "Error",
                "You must be at least 18 years old to use Maate"
            );
        } else {
            const toReturn = {
                ...route.params,
                birthdate: date.toISOString().split("T")[0],
            };
            console.log("RegisterDate : " + JSON.stringify(toReturn));
            handleRedirection("RegisterGender", toReturn, navigation);
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
                <Text style={styles.title}>My {"\n"}Birthdate</Text>
                <MaskedTextInput
                    placeholder="YYYY-MM-DD"
                    keyboardType="numeric"
                    mask="9999-99-99"
                    onChangeText={(text, rawText) => {
                        setDate(new Date(text));
                    }}
                    style={styles.textInput}
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
        width: "36%",
    },

    screenContent: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginBottom: 150,
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
        fontSize: scaleFont(17),
        fontWeight: "bold",
    },
});
