import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SingleProductBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.checkOut}>CHECK OUT</Text>
        <View style={styles.headingBlock}>
          <Text style={styles.heading}>BEST SELLERS</Text>
        </View>
        {/* explore button */}
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>+ Explore</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default SingleProductBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF7371",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 7,
  },
  leftContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    height: 200,
  },
  checkOut: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  headingBlock: {
    backgroundColor: "#313340",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 15,
  },
  heading: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  btnContainer: {
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: "yellow",
    fontSize: 10,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  rightContainer: {},
  image: {
    width: 160,
    height: 220,
  },
});
