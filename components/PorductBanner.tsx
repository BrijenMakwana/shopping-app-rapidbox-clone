import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCircle from "./ProductCircle";
import { useFonts } from "expo-font";

export type PorductBannerProps = {
  backgroundImage: string;
  heading: string;
  products: {
    id: string;
    imageUrl: string;
    productType: string;
  }[];
};

const PorductBanner = (props: PorductBannerProps) => {
  const { backgroundImage, heading, products } = props;
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
          uri: backgroundImage,
        }}
        style={styles.imageBackground}
      >
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.productsContainer}>
          {products.map((item) => (
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
    justifyContent: "space-around",
  },
});
