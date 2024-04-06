import { View, Image, StyleSheet } from "react-native";

import Colors from "../config/Colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          top: 30,
        }}
      >
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <Image
        resizeMode="contain"
        style={styles.chairView}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  chairView: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    backgroundColor: Colors.primary,
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  deleteIcon: {
    backgroundColor: Colors.secondary,
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
