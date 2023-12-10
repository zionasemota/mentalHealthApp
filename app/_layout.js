import { Stack } from "expo-router";
import { Button, StyleSheet } from "react-native";
import { colors } from "../assets/Themes/colors";
import { Link } from "expo-router/";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="pickExercise"
        options={{
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="journalEdit"
        options={{
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="journalList"
        options={{
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="breathingIntervals"
        options={{
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="mindfulness"
        options={{
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
const styles = StyleSheet.create({
  saveButton: {
    fontWeight: "bold",
  },
});
