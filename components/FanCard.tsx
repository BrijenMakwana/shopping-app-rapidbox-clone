import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const FanCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.heading}>#RAPIDFANBOOK</Text>
        <Image
          source={require("../assets/images/fan.jpg")}
          style={styles.fanImage}
        />
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>check out</Text>
          <FontAwesome name="arrow-circle-right" size={27} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default FanCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 7,
  },
  leftContainer: {},
  image: {
    width: 145,
    height: 145,
    resizeMode: "stretch",
  },
  rightContainer: {
    backgroundColor: "#100F0D",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    color: "#FFD631",
    fontSize: 25,
    textTransform: "uppercase",
  },
  fanImage: {
    width: 200,
    height: 200,
  },
  btnContainer: {
    backgroundColor: "#FFD631",
    borderRadius: 7,
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnText: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
