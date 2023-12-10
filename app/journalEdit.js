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
  TextInput,
  Keyboard,
} from "react-native";
import { useState, useEffect, useDebugValue } from "react";
import { colors } from "../assets/Themes/colors";
import Journal from "./JournalObj";
import { Link } from "expo-router/";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function JournalEdit() {
  const params = useLocalSearchParams();
  const [entries, setEntries] = useState([]);
  const [noteTitle, onChangeNoteTitle] = useState("");
  const [noteEntry, onChangeNoteEntry] = useState("");
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const entriesRetrieved = await AsyncStorage.getItem("entries");
        if (entriesRetrieved !== null) {
          setEntries(JSON.parse(entriesRetrieved));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntries();
  }, []);

  useEffect(() => {
    if (entries[params.journalIdx - 1]) {
      onChangeNoteTitle(entries[params.journalIdx - 1]["noteTitle"] || "");
      onChangeNoteEntry(entries[params.journalIdx - 1]["entry"] || "");
    }
  }, [entries, params.journalIdx]);

  const saveEntries = async () => {
    setEntries((entries) => [
      ...entries,
      { entry: noteEntry, noteTitle: noteTitle, index: params.journalIdx },
    ]);
  };

  useEffect(() => {
    const save = async () => {
      try {
        await AsyncStorage.setItem("entries", JSON.stringify(entries));
        console.log(entries);
      } catch (error) {
        // Error saving data
        console.error(error);
      }
    };
    save();
  }, [entries]);
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.saveButton} onPress={saveEntries}>
        <Text style={styles.savesText}>SAVE</Text>
      </Pressable>
      <TextInput
        style={styles.titleInput}
        onChangeText={(text) => onChangeNoteTitle(text)}
        value={noteTitle}
        returnKeyType="done"
      />
      <TextInput
        style={styles.entryInput}
        multiline
        onChangeText={(text) => onChangeNoteEntry(text)}
        value={noteEntry}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 10,
    width: SCREEN_WIDTH,
  },
  saveButton: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: colors.defaultPurple,
    paddingHorizontal: "4%",
    paddingVertical: "2%",
    marginBottom: "3%",
    borderRadius: SCREEN_WIDTH * 0.175 * 0.4,
    width: SCREEN_WIDTH * 0.175,
  },
  savesText: {
    color: "white",
    fontSize: 20,
  },
  titleInput: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_WIDTH * 0.95 * 0.14,
    alignSelf: "center",
    backgroundColor: "white",
    fontSize: 32,
    borderRadius: SCREEN_WIDTH * 0.95 * 0.02,
    marginBottom: "4%",
    paddingLeft: "3%",
    borderWidth: 1,
  },
  entryInput: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_WIDTH * 0.95,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: SCREEN_WIDTH * 0.95 * 0.02,
    fontSize: 25,
    borderWidth: 1,
    paddingLeft: "3%",
  },
});
