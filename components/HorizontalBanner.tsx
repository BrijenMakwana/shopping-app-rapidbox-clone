import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const HorizontalBanner = () => {
  const [fontsLoaded] = useFonts({
    "Sacramento-Regular": require("../assets/fonts/Sacramento/Sacramento-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://png2.cleanpng.com/sh/58b1e8f3e0df40c839bd643f5c0045c6/L0KzQYi4UsIxN5Rpj5GAYUPkSLe4WcNjOmU6TpC9Mke4Q4K6VsE2OWQ8UKk6NkG1RIO6UcIyQF91htk=/5a3a8f193b2456.42753136151378716124231218.png",
        }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.heading}>When comfort meets style</Text>
        <Text style={styles.categoryName}>Heels & Wedges</Text>
      </View>
      <Pressable style={styles.btnContainer}>
        <Text style={styles.btnText}>+ Shop now</Text>
      </Pressable>
    </View>
  );
};

export default HorizontalBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBE3FC",
    width: "95%",
    alignSelf: "center",
    marginVertical: 20,
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
  infoContainer: {
    alignItems: "center",
    flex: 1,
  },
  heading: {
    fontFamily: "Sacramento-Regular",
    fontSize: 25,
    fontWeight: "600",
  },
  categoryName: {
    textTransform: "capitalize",
    fontSize: 17,
    fontWeight: "100",
  },
  btnContainer: {
    backgroundColor: "#3B4357",
    position: "absolute",
    paddingHorizontal: 5,
    paddingVertical: 2,
    right: 5,
    bottom: 3,
  },
  btnText: {
    color: "#fff",
    fontSize: 7,
    fontWeight: "600",
  },
});
