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
import { Link } from "expo-router";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function pickExercise() {
  return (
    <View style={styles.container}>
      <Image
        source={imagesAndSounds.cornerCircLeft}
        style={styles.cornerCircle}
      />
      <Image source={imagesAndSounds.doctors} style={styles.doctorsImg} />
      <View style={styles.cbtView}>
        <Text style={styles.cbtText}>WHICH CBT EXERCISE?</Text>
        <Link
          href={{
            pathname: "/breathingIntervals",
          }}
        >
          <View style={styles.cbtButtonOne}>
            <Text style={styles.cbtButtonText}>Breathing Intervals</Text>
          </View>
        </Link>
        <Pressable>
          <View style={styles.cbtButtonTwo}>
            <Text style={styles.cbtButtonText}>Coming Soon!!</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // We'll learn about "flex" and other flexbox properties in class!
    flexDirection: "column", // Try: 'row' or 'column'
    backgroundColor: "white",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  cornerCircle: {},
  cbtText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
  },
  cbtButtonText: {
    alignSelf: "center",

    fontSize: 18,
  },
  cbtView: {
    backgroundColor: "#49467E",
    marginBottom: 0,
    height: SCREEN_HEIGHT * 0.6,
    borderTopRightRadius: SCREEN_WIDTH * 0.15,
    borderTopLeftRadius: SCREEN_WIDTH * 0.15,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  cbtButtonOne: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.07,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },

  cbtButtonTwo: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.07,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },

  doctorsImg: {
    alignSelf: "center",
    width: SCREEN_WIDTH * 0.85,
    borderRadius: SCREEN_WIDTH * 0.85 * 0.1,
  },
  title: {
    fontSize: 24, // Try changing this value!
    fontWeight: "bold", // Try: 'light' or 'normal' or 'bold'
    textAlign: "center",
  },
  paragraph: {
    // Try changing these values!
    margin: 24,
    fontSize: 18,
    textAlign: "center",
  },
  logo: {
    // Try changing these values!
    height: 64,
    width: 64,
    margin: 8,
  },
});
