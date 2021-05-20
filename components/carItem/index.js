import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagLine, tagLineLink, image } = props.car;

  return (
    <View style={styles.frontContainer}>
      <ImageBackground source={image} style={styles.backgroundImage} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}
          {' '}
          <Text style={styles.subtitleLink}>{tagLineLink}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Button was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("2nd Button was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
