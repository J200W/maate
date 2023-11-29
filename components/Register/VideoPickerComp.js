import React, { useState, useRef } from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Video } from 'expo-av';
import { scaleFont } from "../../function/Font";

export default function VideoPickerComp(props) {

    const { video, setVideo, submit } = props;
    const videoRef = useRef(null);

    const handleSubmit = async () => {
        submit()
    }

    const handleCancel = () => {
        setVideo(null)
    }

    return (
        <>
            <Video
                ref={videoRef}
                source={{ uri: video }}
                style={styles.videoContainer}
                resizeMode="contain"
                isLooping
                shouldPlay
            />
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={handleCancel}>
                    <Ionicons name='close-sharp' color="#e84c5c" size={60} style={styles.icon}/>
                    <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Ionicons name='checkmark-sharp' color="#1fc600" size={60} style={styles.icon} />
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
            </View>
        </>
    )
};


const styles = StyleSheet.create({
    videoContainer: { 
        width: "100%", 
        height: "100%",
        objectFit: 'cover',
    },
    icon: { 
        borderRadius: 400,
        padding: 18,
    },
    buttonContainer:{
        position: 'absolute',
        bottom: '10%',
    },
    button:{
        bottom: 50,
        borderRadius: 1000,
        width: 90,
        height: 90,
        justifyContent: 'center', 
        alignItems:'center',
        zIndex: 1,
    },
    buttonText: {
        color: 'white', 
        textAlign:'center',
        fontWeight: "bold",
        fontSize: scaleFont(13),
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 100,
    },
});