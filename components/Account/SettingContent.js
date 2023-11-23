import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Slider from "react-native-a11y-slider";
import MyMarker from "./MyMarker";
import { Ionicons } from "@expo/vector-icons";
import RadioButtonSetting from "./RadioButtonSetting";
import Toast from "react-native-toast-message";
import handleShowToast from "../Toast";
import toastConfig from "../CustomToast";
import * as Location from "expo-location";
import handleRedirection from "../../function/Handles";

export default function SettingContent({ navigateTo }) {
    const [orientation, setOrientation] = useState("Women");
    const options = [{ value: "Women" }, { value: "Men" }, { value: "Both" }];

    const [ageRange, setAgeRange] = useState([23, 35]);
    const [distance, setDistance] = useState([6]);
    const [location, setLocation] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let { status } =
                    await Location.requestBackgroundPermissionsAsync();
                if (status !== "granted") {
                    console.log("Permission to access location was denied");
                }
                let position = await Location.getCurrentPositionAsync({});
                let area = await Location.reverseGeocodeAsync({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });

                setLocation(position);
                setCity(area[0].city);
                setCountry(area[0].country);
                console.log(area[0].city, area[0].country);
            } catch (error) {
                // Handle errors appropriately
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <ScrollView style={styles.listSetting}>
            <View style={styles.settingSection}>
                <Text style={styles.titleSection}>Preferences</Text>
                <Text style={styles.titleSubSection}>Interested In</Text>
                <RadioButtonSetting
                    data={options}
                    onSelect={(value) => setOrientation(value)}
                />
                <Text style={styles.titleSubSection}>Age range</Text>
                <View style={styles.slider}>
                    <Slider
                        min={18}
                        max={100}
                        values={ageRange}
                        markerComponent={MyMarker}
                        labelStyle={{
                            backgroundColor: "#FADBDE",
                            borderRadius: 10,
                            color: "#E84C5C",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                        labelTextStyle={{
                            color: "#333",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                        onChange={(values) => setAgeRange(values)}
                    />
                </View>
                <Text style={styles.titleSubSection}>Location</Text>
                <TouchableOpacity style={styles.location}>
                    <Text style={styles.locationText}>
                        {city}, {country}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.titleSubSection}>Distance (in miles)</Text>
                <View style={styles.slider}>
                    <Slider
                        min={0}
                        max={100}
                        values={distance}
                        markerComponent={MyMarker}
                        labelStyle={{
                            backgroundColor: "#FADBDE",
                            borderRadius: 10,
                            color: "#E84C5C",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                        labelTextStyle={{
                            color: "#333",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                        onChange={(values) => setDistance(values)}
                    />
                </View>
                <TouchableOpacity style={styles.hobbies} onPress={navigateTo}>
                    <Text style={styles.hobbiesText}>Change my hobbies</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.titleSection}>Notifications</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listSetting: {
        flex: 1,
        flexDirection: "column",
        width: "90%",
        alignSelf: "center",
    },

    settingSection: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingBottom: 20,
        width: "100%",
    },

    titleSection: {
        fontSize: 15,
        color: "#AAA",
    },

    titleSubSection: {
        fontSize: 20,
        color: "#000",
        marginTop: 20,
    },

    radioButtonView: {
        flexDirection: "row",
    },

    radioButton: {
        fontSize: 12,
    },

    slider: {
        width: "93%",
        height: 50,
        marginVertical: 10,
        alignSelf: "center",
    },

    location: {
        width: "100%",
        height: 50,
        marginVertical: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "left",
        borderColor: "#E84C5C",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 20,
    },

    locationText: {
        fontSize: 15,
        color: "#E84C5C",
    },

    hobbies: {
        width: "100%",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 20,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "left",
    },

    hobbiesText: {
        fontSize: 20,
        color: "#000",
        paddingVertical: 10,
        marginVertical: 10,
    },
});
