import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { scaleFont } from "../function/Font";

export default function Textinput({ placeholder, setter, isPassword }) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    const handleOnFocus = () => {
        setIsFocused(true);
    };

    const handleOnBlur = () => {
        setIsFocused(false);
    };

    const handleHasContent = (e) => {
        if (e == "") setHasContent(false);
        else setHasContent(true);
    };

    const handleSetterChange = (value) => {
        setter(value);
        handleHasContent(value);
    };
    return (
        <View style={styles.container}>
            <TextInput
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChangeText={handleSetterChange}
                numberOfLines={1}
                secureTextEntry={isPassword}
                cursorColor={"#777777"}
                style={[
                    styles.textinput,
                    { backgroundColor: isFocused ? "#fefefe" : "white" },
                ]}
            />
            <Text
                accessible={true}
                style={[
                    styles.placeholder,
                    { top: isFocused || hasContent ? 8 : null },
                ]}
            >
                {" "}
                {placeholder}{" "}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        marginTop: 10,
    },

    textinput: {
        height: 68,
        width: "100%",
        borderRadius: 15,
        color: "black",
        paddingTop: 18,
        paddingBottom: 4,
        paddingHorizontal: 20,
        pointerEvents: "auto",
        fontSize: scaleFont(15),
        fontWeight: "500",
    },
    placeholder: {
        color: "#777777",
        position: "absolute",
        left: 16,
        fontSize: scaleFont(12),
        fontWeight: "500",
        userSelect: "none",
        pointerEvents: "none",
    },
});
