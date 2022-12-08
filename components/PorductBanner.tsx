import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCircle from "./ProductCircle";
import { circleProductsData } from "../assets/data/data";
import { useFonts } from "expo-font";

const PorductBanner = () => {
  const [fontsLoaded] = useFonts({
    "Sacramento-Regular": require("../assets/fonts/Sacramento/Sacramento-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1614853035846-77b0a40a6b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        style={styles.imageBackground}
      >
        <Text style={styles.heading}>his wordrobe</Text>
        <View style={styles.productsContainer}>
          {circleProductsData.map((item) => (
            <ProductCircle
              key={item.id}
              imageUrl={item.imageUrl}
              productType={item.productType}
            />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default PorductBanner;

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginTop: 10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  heading: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 20,
    letterSpacing: 2,
    fontFamily: "Sacramento-Regular",
  },
  productsContainer: {
    flexDirection: "row",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
