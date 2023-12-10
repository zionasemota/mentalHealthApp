import {
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Audio } from "expo-av";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useEffect, useDebugValue } from "react";
import { colors } from "../assets/Themes/colors";
import Journal from "./JournalObj";
import { Link } from "expo-router/";
import AsyncStorage from "@react-native-async-storage/async-storage";
import imagesAndSounds from "../assets/images";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function mindfulness() {
  const [sound, setSound] = useState();
  const [isPlaying, setPlayMode] = useState(false);
  const [iconName, setIcon] = useState("play");

  const meditationList = [
    {
      index: "1",
      meditationName: "Healing Waves",
      audioPath: imagesAndSounds.healingWaves,
    },
    {
      index: "2",
      meditationName: "Angelic Choir",
      audioPath: imagesAndSounds.angelicChoir,
    },
    {
      index: "3",
      meditationName: "Morning Mist",
      audioPath: imagesAndSounds.morningMist,
    },
  ];
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

  let iconDisplayed = <View />;

  async function startFunction(item) {
    if (isPlaying) {
      await sound.pauseAsync();
      setPlayMode(!isPlaying);
      setIcon("play");
    } else if (!isPlaying) {
      playSound(item.audioPath);
      setPlayMode(!isPlaying);
      setIcon("pause");
    }
  }

  const renderEntry = ({ item }) => (
    <Pressable onPress={() => startFunction(item)}>
      <View style={styles.link}>
        <Journal
          index={item.index}
          noteTitle={item.meditationName}
          noteEntry={item.audioPath}
        ></Journal>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>MEDITATION</Text>
      <Text style={styles.tutorialText}>
        Click sound name to play, click again to stop
      </Text>
      <FlatList
        style={styles.liststyle}
        data={meditationList}
        renderItem={(item) => renderEntry(item)}
        keyExtractor={(item) => item.index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  play: {
    width: SCREEN_WIDTH * 0.06,
    height: SCREEN_WIDTH * 0.06,
    backgroundColor: colors.defaultPurple,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: (SCREEN_WIDTH * 0.06) / 2,
    marginRight: "2%",
  },
  tutorialText: {
    alignItems: "center",
    alignSelf: "center",
    verticalAlign: "middle",
    backgroundColor: colors.defaultPurple,
    color: "white",
    width: SCREEN_WIDTH,
    fontSize: 20,
    marginBottom: "5%",
  },
  link: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingBottom: "3%",
    marginBottom: "5%",
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_WIDTH * 0.95 * 0.2,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: colors.notePlaceholderOrStamp,
    shadowOpacity: 0.9,
    shadowOffset: { height: 2 },
  },
  link2: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_WIDTH * 0.95 * 0.2,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    width: SCREEN_WIDTH,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    paddingBottom: 20,
  },
});
