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
import { useState, useEffect, useDebugValue } from "react";
import { colors } from "../assets/Themes/colors";
import Journal from "./JournalObj";
import { Link } from "expo-router/";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function JournalList() {
  const [entries, setEntries] = useState([{}]);
  // const entries = [
  //     {
  //       index: "1",
  //       noteTitle: "My First Entry",
  //       timestamp: "2023-12-08T10:00:00Z",
  //       entry: "Today, I started my new journal. Excited about this journey!",
  //     },
  //     {
  //       index: "2",
  //       noteTitle: "Reflections on Learning",
  //       timestamp: "2023-12-09T08:30:00Z",
  //       entry:
  //         "I spent the day learning about React Native. It was challenging but rewarding.",
  //     },
  //   ];

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const entriesRetrieved = await AsyncStorage.getItem("entries");
        if (entriesRetrieved !== null) {
          setEntries(JSON.parse(entriesRetrieved));
        } else {
          await AsyncStorage.setItem("entries", JSON.stringify([entries]));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntries();
  }, [entries]);

  const renderEntry = ({ item }) => (
    <Link
      href={{
        pathname: "/journalEdit",
        params: {
          journalIdx: item.index,
          noteTitle: item.noteTitle,
          noteEntry: item.entry,
        },
      }}
      style={styles.link}
    >
      <Journal
        index={item.index}
        noteTitle={item.noteTitle}
        s
        noteEntry={item.entry}
      ></Journal>
    </Link>
  );
  const newIndex = Object.keys(entries).length + 1;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>JOURNAL</Text>
      <Pressable style={styles.addEntryButton}>
        <Link
          href={{
            pathname: "/journalEdit",
            params: {
              journalIdx: newIndex,
              noteTitle: "",
              noteEntry: "",
            },
          }}
        >
          <Text style={styles.addEntryText}>+ ADD ENTRY</Text>
        </Link>
      </Pressable>
      <FlatList
        style={styles.liststyle}
        data={entries}
        renderItem={(item) => renderEntry(item)}
        keyExtractor={(item) => item.index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: "white",
    flexDirection: "column",
    paddingBottom: "3%",
    alignItems: "flex-start",
    marginBottom: "5%",
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_WIDTH * 0.95 * 0.2,
    alignSelf: "center",
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
  addEntryButton: {
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    backgroundColor: colors.defaultPurple,
    marginBottom: "4%",
  },
  addEntryText: {
    color: "white",
    fontWeight: "bold",
  },
});
