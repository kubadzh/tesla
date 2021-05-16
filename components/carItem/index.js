import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.frontContainer}>
      <ImageBackground
        source={require("../../assets/images/main-hero.jpg")}
        style={styles.backgroundImage}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Order Online for Touchless Delivery</Text>
      </View>
    </View>
  );
};

export default CarItem;
