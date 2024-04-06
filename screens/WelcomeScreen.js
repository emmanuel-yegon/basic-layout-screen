import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text>Sell what you don't need</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: "#fc5c65",
          width: "100%",
          height: "10%",
        }}
      />
      <View
        style={{
          backgroundColor: "#4ECDC4",
          width: "100%",
          height: "10%",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 0.998,
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoView: {
    top: 80,
    alignItems: "center",
    textDecorationStyle: "double",
  },
});
