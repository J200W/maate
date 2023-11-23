import React, { useEffect} from "react";
import { StyleSheet, Image, Animated, Easing } from "react-native";
import { Video } from 'expo-av'

export default function ChatProfileContent(props) {
    const {type} = props;

    const animatedValue = new Animated.Value(0);

    useEffect(() => {
    const decreaseAnimation = Animated.timing(animatedValue, {
        toValue: 0,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: false,
    });
  
      const increaseAnimation = Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      });

      const sequenceAnimation = Animated.sequence([
        decreaseAnimation,
        increaseAnimation,
      ]);

      sequenceAnimation.start();
    }, [type]);

    return (
        <Animated.View style={[{opacity: animatedValue}, styles.component]}>
            {
                type == "video" ?
                <Video
                    source={require('../../assets/emily-vid.mp4')}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={styles.videoContainer}
                />
                :
                <Image source={ require('../../assets/emily-picture.png') } 
                    style={styles.image}
                    resizeMode="cover"
                />
            }
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    component: {
        backgroundColor: "#FFFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },

    videoContainer: {
        width: "100%",
        height: "100%",
    },

    image: {
        width: "100%",
        height: "100%",
    }
})