import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export type ProductThreeImageProps = {
  heading: string;
  imagesUrl: string[];
  btnTextOne: string;
  btnTextTwo: string;
  btnTextThree: string;
};

const ProductThreeImage = (props: ProductThreeImageProps) => {
  const { heading, imagesUrl, btnTextOne, btnTextTwo, btnTextThree } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.imagesContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={{
              uri: imagesUrl[0],
            }}
            style={styles.leftImage}
          />
          {/* button */}
          <Pressable style={styles.btnContainer}>
            <Text style={styles.btnTextOne}>{btnTextOne}</Text>
            <Text style={styles.btnTextTwo}>{btnTextTwo}</Text>
            <Text style={styles.btnTextThree}>{btnTextThree}</Text>
          </Pressable>
        </View>
        <View style={styles.rightContainer}>
          <Image
            source={{
              uri: imagesUrl[1],
            }}
            style={[styles.rightImage, { marginTop: 10 }]}
          />
          <Image
            source={{
              uri: imagesUrl[2],
            }}
            style={styles.rightImage}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductThreeImage;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
  },
  heading: {
    textTransform: "uppercase",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  imagesContainer: {
    flexDirection: "row",
    marginTop: 25,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  leftContainer: {
    width: "55%",
  },
  leftImage: {
    height: 250,
    width: "100%",
  },
  btnContainer: {
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  btnTextOne: {
    fontSize: 20,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  btnTextTwo: {
    fontSize: 14,
    textTransform: "capitalize",
    marginTop: 5,
  },
  btnTextThree: {
    fontSize: 12,
    textTransform: "capitalize",
    color: "grey",
    marginTop: 5,
  },
  rightContainer: {
    padding: 10,
    flexDirection: "column-reverse",
    width: "45%",
  },
  rightImage: {
    height: 150,
    width: "100%",
  },
});
