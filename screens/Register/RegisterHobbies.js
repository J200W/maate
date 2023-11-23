import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import Button from "../../components/Button";
import StatusBarCustom from "../../components/StatusBarCustom";
import Header from "../../components/Header";
import TagSelector from "../../components/Register/TagSelector";
import hobbiesList from "../../function/HobbiesList";
import handleShowToast from "../../components/Toast";
import toastConfig from "../../components/CustomToast";
import handleRedirection from "../../function/Handles";

export default function RegisterHobbies({ navigation }) {
    const [hobbies, setHobbies] = useState([]);
    const route = useRoute();

    const handleItemPress = (item) => {
        if (hobbies.includes(item.label)) {
            setHobbies(hobbies.filter((i) => i !== item.label));
        } else {
            setHobbies([...hobbies, item.label]);
        }
    };

    const handleSubmit = () => {
        if (hobbies.length === 0) {
            handleShowToast(
                "error",
                "Error",
                "Please choose at least one hobby to continue"
            );
        } else if (hobbies.length > 5) {
            return;
        } else {
            const toReturn = { ...route.params, hobbies: hobbies };
            console.log("RegisterHobbies : " + JSON.stringify(toReturn));
            handleRedirection("RegisterPhoto", toReturn, navigation);
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
                <Text style={styles.title}>Hobbies</Text>
                <Text style={styles.subTitle}>
                    Tell the world what passionates you !{"\n"}You can choose up
                    to 5 hoobies.
                </Text>
                <ScrollView style={styles.scroll}>
                    <TagSelector
                        data={hobbiesList}
                        max={5}
                        onItemPress={(item) => {
                            handleItemPress(item);
                        }}
                        onMaxError={() => {
                            handleShowToast(
                                "error",
                                "Error",
                                "You can choose up to five hobbies"
                            );
                        }}
                        itemStyle={styles.item}
                        itemStyleSelected={styles.itemSelected}
                        itemLabelStyle={styles.label}
                        itemLabelStyleSelected={styles.labelSelected}
                    />
                </ScrollView>
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
        fontSize: 60,
        letterSpacing: 2,
        width: "80%",
        marginTop: "10%",
    },

    subTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "#AAA",
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
        width: "72%",
    },

    screenContent: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginTop: 50,
        zIndex: -1,
    },

    scroll: {
        width: "90%",
        height: "50%",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#CCCCCC",
        zIndex: 1,
        backgroundColor: "#EEEEEE",
    },

    item: {
        backgroundColor: "#FFFFFF",
        borderColor: "#AAAAAA",
        borderWidth: 1,
        borderRadius: 20,
        margin: 3,
    },
    itemSelected: {
        backgroundColor: "#e84c5c",
        borderColor: "#e84c5c",
        borderWidth: 1,
        borderRadius: 20,
        margin: 3,
    },
    label: {
        fontSize: 15,
        color: "#AAAAAA",
    },
    labelSelected: {
        fontSize: 15,
        color: "#FFFFFF",
    },
});
