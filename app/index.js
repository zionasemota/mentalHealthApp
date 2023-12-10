import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Pressable,
} from "react-native";
import imagesAndSounds from "../assets/images";
import { Link } from "expo-router/";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/*For the CBT - pick exercises*/}
      <Link
        href={{
          pathname: "/pickExercise",
        }}
      >
        <View style={styles.cbtBox}>
          <Image
            source={imagesAndSounds.cbtHome}
            style={styles.cbtHomeImage}
          ></Image>
          <View style={styles.cbtTextBox}>
            <Text style={styles.cbtActualText}>
              CBT(COGNITIVE BEHAVORIAL THERAPY) {"\n"}EXERCISES
            </Text>
          </View>
        </View>
      </Link>

      {/*For the Mindfulness/Meditation*/}
      <Link
        href={{
          pathname: "/mindfulness",
        }}
      >
        <View style={styles.mindBox}>
          <Image
            source={imagesAndSounds.mindfulnessHome}
            style={styles.mindHomeImage}
          ></Image>
          <View style={styles.mindTextBox}>
            <Text style={styles.mindActualText}>
              MINDFULNESS W/ {"\n"} MEDITATION
            </Text>
          </View>
        </View>
      </Link>

      {/*For the Journal*/}
      <Link
        href={{
          pathname: "/journalList",
        }}
      >
        <View style={styles.journalBox}>
          <Image
            source={imagesAndSounds.myjournalHome}
            style={styles.journalHomeImage}
          ></Image>
          <View style={styles.journalTextBox}>
            <Text style={styles.journalActualText}>MY JOURNAL</Text>
          </View>
        </View>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  cornerCircRight: {
    alignContent: "flex-end",
  },
  cbtBox: {
    alignItems: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 0.9 * 0.7,
  },
  cbtTextBox: {
    width: SCREEN_WIDTH * 0.9,
    marginTop: -20,
    justifyContent: "center",
    height: SCREEN_WIDTH * 0.9 * 0.21,
    borderRadius: SCREEN_WIDTH * 0.9 * 0.05,
    backgroundColor: "white",
    shadowColor: "grey",
    shadowOpacity: 0.9,
    shadowOffset: { height: 2 },
  },
  cbtActualText: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  cbtHomeImage: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_WIDTH * 0.8 * 0.5,
    alignSelf: "center",
    borderRadius: SCREEN_WIDTH * 0.8 * 0.05,
  },
  mindBox: {
    alignItems: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 0.9 * 0.7,
  },
  mindTextBox: {
    width: SCREEN_WIDTH * 0.9,
    marginTop: -20,
    justifyContent: "center",
    height: SCREEN_WIDTH * 0.9 * 0.21,
    borderRadius: SCREEN_WIDTH * 0.9 * 0.05,
    backgroundColor: "white",
    shadowColor: "grey",
    shadowOpacity: 0.9,
    shadowOffset: { height: 2 },
  },
  mindActualText: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  mindHomeImage: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_WIDTH * 0.8 * 0.5,
    alignSelf: "center",
    borderRadius: SCREEN_WIDTH * 0.8 * 0.05,
  },
  journalBox: {
    alignItems: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 0.9 * 0.7,
  },
  journalTextBox: {
    width: SCREEN_WIDTH * 0.9,
    marginTop: -20,
    justifyContent: "center",
    height: SCREEN_WIDTH * 0.9 * 0.21,
    borderRadius: SCREEN_WIDTH * 0.9 * 0.05,
    backgroundColor: "white",
    shadowColor: "grey",
    shadowOpacity: 0.9,
    shadowOffset: { height: 2 },
  },
  journalActualText: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  journalHomeImage: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_WIDTH * 0.8 * 0.5,
    alignSelf: "center",
    borderRadius: SCREEN_WIDTH * 0.8 * 0.05,
  },
});
