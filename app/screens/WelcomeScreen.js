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
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 1,
  },
  logo: {
    width: 90,
    height: 90,
  },
  logoView: {
    top: 50,
    alignItems: "center",
    textDecorationStyle: "double",
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: "8%",
  },
  registerButton: {
    backgroundColor: "#4ECDC4",
    width: "100%",
    height: "8%",
  },
});
