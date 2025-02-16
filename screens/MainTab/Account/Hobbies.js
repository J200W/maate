import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Toast from "react-native-toast-message";

import Button from "../../../components/Button";
import StatusBarCustom from "../../../components/StatusBarCustom";
import Header from "../../../components/Header";
import TagSelector from "../../../components/Register/TagSelector";
import hobbiesList from "../../../function/HobbiesList";
import handleShowToast from "../../../components/Toast";
import toastConfig from "../../../components/CustomToast";
import handleRedirection from "../../../function/Handles";
import { scaleFont } from "../../../function/Font";

export default function Hobbies({ navigation }) {
    const [hobbies, setHobbies] = useState([]);

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
            // Save the data before redirecting
            handleRedirection("back", {}, navigation);
        }
    };

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
                <Button text="Save" fill={true} onPress={handleSubmit} />
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
        fontSize: scaleFont(60),
        letterSpacing: 2,
        width: "80%",
        marginTop: "10%",
    },

    subTitle: {
        fontSize: scaleFont(20),
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
        fontSize: scaleFont(15),
        color: "#AAAAAA",
    },
    labelSelected: {
        fontSize: scaleFont(15),
        color: "#FFFFFF",
    },
});
