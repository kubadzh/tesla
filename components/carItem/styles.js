import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  frontContainer: {
    width: "100%",
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: "#d8e3e7",
    fontSize: 40,
    fontWeight: "400",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleLink: {
textDecorationLine: 'underline',
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
