
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/Button";
import StatusBarCustom from "../components/StatusBarCustom";
import { scaleFont } from "../function/Font";

export default function Home({ navigation }) {
    
    const handleRedirection = (page) => {
        navigation.navigate(page);
    }

    return (
        <View style={styles.phone}>
            <StatusBarCustom backgroundColor="grey" display="default" />
            <Image
                source={require("./../assets/maate-logo.png")}
                style={styles.maateLogo}
            />
            <Text style={styles.titleApp}>Maate</Text>
            <Text style={styles.subtitleApp}>
                Share Your
                <Text style={styles.word}> Story</Text>, Spark a{"\n"}
                <Text style={styles.word}> Connection!</Text>
            </Text>
            <View style={styles.buttonList}>
                <Button text="Log In" fill={true} onPress={() => handleRedirection("Login")}/>
                <Button text="Sign Up" fill={false} onPress={() => handleRedirection("RegisterVideo")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#000",
  },

  phone: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },

  maateLogo: {
    width: 200,
    maxHeight: 200,
    objectFit: "contain",
    marginBottom: "5%",
  },

  titleApp: {
    fontSize: scaleFont(30),
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },

  subtitleApp: {
    fontSize: scaleFont(17),
    color: "#A6A6A6",
    marginBottom: 40,
    textAlign: "center",
    margin: "auto",
  },

  word: {
    color: "#E84C5C",
  },

    buttonList: {
        marginTop: 0,
        flexDirection: "row",
        justifyContent: "center",
    },
});
