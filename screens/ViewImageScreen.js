import { View, Image, StyleSheet } from "react-native";

export default function ViewImageScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          top: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "#fc5c65",
            width: 50,
            height: 50,
            marginLeft: 10,
          }}
        />
        <View
          style={{
            backgroundColor: "#4ECDC4",
            width: 50,
            height: 50,
            marginRight: 10,
          }}
        />
      </View>
      <Image style={styles.chairView} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  chairView: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    bottom: 100,
  },
});
