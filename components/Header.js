import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

if (Platform.OS === 'ios') {
    var statusBarHeight = 18;
}
else {
    var statusBarHeight = StatusBar.currentHeight / 5;
}

export default function Header(props) {
    var bg = "#F6F6F6"
    var goBack = "default"

    if (props.type == "menu") {
        var buttonColor = "#AAAAAA";
        var titleColor = "#000000";
    }
    
    else if (props.type == "image") {
        var buttonColor = "#FFFFFF";
        var titleColor = "#FFFFFF";
    }

    if (props.bg) {
        bg = props.bg;
    }

    if (props.back !== undefined && props.back == false) {
        var goBack = "none";
    }

    return (
        <View style={[styles.headerBox, {backgroundColor: bg, paddingVertical: props.title ? "2%" : "5%"}]}>
            <TouchableOpacity style={[styles.goBack, {display: goBack}]} onPress={props.goBack}>
                <Ionicons name="chevron-back-sharp" size={40} color={buttonColor} />
            </TouchableOpacity>
            <Text style={[styles.title, {color: titleColor}]}>{props.title ? props.title : ""}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        borderBottomColor: "#EEEEEE",
        paddingHorizontal: "10%",
        backgroundColor: "#F6F6F6",
        opacity: 0.95,
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        marginLeft: "5%",
    },

    goBack: {
        marginLeft: "2%",
    }
});