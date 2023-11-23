import { useIsFocused } from "@react-navigation/core";
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";

export default function StatusBarCustom(props) {

    const isFocused = useIsFocused();

    if (props.backgroundColor == "black"){
        var backgroundColor = "#000";
        var color = "light-content";
        if (Platform.OS === 'ios') {
            var color = "dark-content";
        }
    }
    if (props.backgroundColor == "blackFeed"){
        var backgroundColor = "#000";
        if (Platform.OS === 'ios') var color = "light-content";
    }
    
    else if (props.backgroundColor == "white"){
        var backgroundColor = "#FFF";
        var color = "dark-content";
    }
    else if (props.backgroundColor == "grey"){
        var backgroundColor = "transparent";
        var color = "dark-content";
    }
    else if (props.backgroundColor == "transparent"){
        var backgroundColor = "transparent";
        var color = "light-content";
    }
    else {
        var backgroundColor = "#FF0000";
        var color = "dark-content";
    }
    return (
        isFocused && <View style={[styles.statusBar, { backgroundColor: backgroundColor, display: props.display }]}>
            <SafeAreaView>
                <StatusBar animated={true} translucent={true} barStyle={color} backgroundColor={backgroundColor}/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        color: "#000",
        position: "absolute",
        top: 0,
    },
});
