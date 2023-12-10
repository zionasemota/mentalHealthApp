import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { colors } from "../assets/Themes/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function Journal({
  index,
  noteTitle,
  lastModifiedTimestamp,
  noteEntry,
}) {
  return (
    <View style={styles.journalView}>
      <View style={styles.titleAndTimestamp}>
        <Text style={styles.noteTitle}>{noteTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  journalView: {
    justifyContent: "center",
    alignContent: "center",
  },
  play: {
    width: SCREEN_WIDTH * 0.06,
    height: SCREEN_WIDTH * 0.06,
    backgroundColor: colors.defaultPurple,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (SCREEN_WIDTH * 0.06) / 2,
    paddingLeft: 2,
    marginRight: "2%",
  },
  link: {
    width: "100%",
  },
  titleAndTimestamp: {
    color: colors.defaultPurple,
  },
  noteTitle: {
    color: colors.defaultPurple,
    flexWrap: "wrap",
    fontSize: 32,
  },
  noteTimestamp: {
    color: colors.notePlaceholderOrStamp,
    paddingTop: "3%",
    fontSize: 16,
    flexWrap: "wrap",
  },
});
