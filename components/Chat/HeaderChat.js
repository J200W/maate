import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { scaleFont } from "../../function/Font";

export default function HeaderChat(props) {

    const handleClickOnProfile = () => {
        props.profileClick();
    }

    return (
        <View style={styles.headerBox}>
            <TouchableOpacity style={styles.goBack} onPress={props.goBack}>
                <Ionicons name="chevron-back-sharp" size={40} color="#AAA" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClickOnProfile} style={styles.profile}>
                <Image source={ require('../../assets/emily-pdp.png') } 
                    style={styles.image}
                />
                <Text style={styles.headerText}>Emily<Text style={styles.headerTime}> • 4h ago</Text></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        borderBottomColor: "#EEEEEE",
        paddingHorizontal: "10%",
        paddingVertical: "2%",
        opacity: 0.95,
    },

    profile: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },

    headerText: {
        fontSize: scaleFont(12),
        fontWeight: "bold",
        color: "#000",
    },

    headerTime: {
        fontWeight: "normal",
        color: "#AAA",
    },

    image: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },

    goBack: {
        position: "absolute",
        marginLeft: "12%",
        zIndex: 1,
    },
});