import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CarItem from "./components/carItem";


export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model S"}
        tagLine={"Order Online for"}
        tagLineLink={"Touchless Delivery"}
        image={require("./assets/images/ModelS.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
