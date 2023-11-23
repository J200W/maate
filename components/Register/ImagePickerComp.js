import React, { useState } from "react";
import { View, Pressable, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import handlePickImage from "../../function/ImagePicker";

export default function ImagePickerComp(props) {
    const { setCheck, setImage, image, setImageUri, setType, type } = props;
    const [pressedImage, setPressedImage] = useState(false);

    const handlePick = async () => {
        await handlePickImage(setImage, setImageUri, setType, setCheck);
    };

    return (
        <Pressable
            style={[
                styles.imageContainer,
                { borderWidth: pressedImage ? 1 : 0.5 },
            ]}
            onPressIn={() => {
                setPressedImage(true);
            }}
            onPressOut={() => {
                handlePick();
                setPressedImage(false);
            }}
        >
            {image === null ? (
                <Ionicons
                    name="person"
                    color="#e84c5c"
                    size={100}
                    style={[
                        {
                            backgroundColor: "white",
                            borderRadius: 100,
                            padding: 18,
                        },
                    ]}
                />
            ) : (
                <Image
                    source={{ uri: `data:image/${type};base64,${image}` }}
                    style={styles.image}
                />
            )}
            <View style={styles.iconAddImage}>
                <Ionicons name="add" color="#e84c5c" size={30} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 200,
        width: 200,
        backgroundColor: "white",
        borderRadius: 200,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        marginTop: 10,
        marginBottom: 38,
    },
    image: {
        borderRadius: 200,
        padding: 100,
    },
    iconAddImage: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 2,
        bottom: 0,
        right: 2,
    },
});
