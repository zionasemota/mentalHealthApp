import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Pressable,
  Button,
  ImageBackground,
} from "react-native";
import imagesAndSounds from "../assets/images";
import { Link } from "expo-router/";
import { useEffect, useState } from "react";
import { colors } from "../assets/Themes/colors";
import { Audio } from "expo-av";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function breathingIntervals() {
  const [sound, setSound] = useState();
  const [isPlaying, setPlayMode] = useState(false);
  const [startText, changeStart] = useState("START");

  async function playSound(chosenSound) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(chosenSound);
    setSound(sound);

    console.log("Sound is playing!");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  const [circleText, changeText] = useState("INHALE");
  const startFunction = () => {
    setPlayMode(!isPlaying);
    changeStart("PLAYING INTERVAL");
    changeText("INHALE");
    playSound(imagesAndSounds.inhale);
    setTimeout(() => {
      changeText("HOLD");
      playSound(imagesAndSounds.hold);
    }, 4000);
    setTimeout(() => {
      changeText("EXHALE");
      playSound(imagesAndSounds.exhale);
    }, 11000);

    setTimeout(() => {
      changeText("INHALE");
      setPlayMode(!isPlaying);
      changeStart("START");
    }, 19000);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.intervalCircle}
          source={imagesAndSounds.gradientCircle}
        >
          <View style={styles.circleView}>
            <Text style={styles.circleViewText}>{circleText}</Text>
          </View>
        </ImageBackground>

        <Pressable
          style={styles.startButton}
          onPress={() => {
            if (!isPlaying) {
              startFunction();
            }
          }}
        >
          <Text style={styles.startText}>{startText}</Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  circleView: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  circleViewText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  startButton: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_WIDTH * 0.2 * 0.5,
    backgroundColor: colors.defaultPurple,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SCREEN_WIDTH * 0.2 * 0.5,
    marginTop: "7%",
  },
});
