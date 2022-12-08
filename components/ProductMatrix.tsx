import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export type ProductMatrixProps = {
  heading: string;
  imagesUrl: string[];
  textOne: string;
  textTwo: string;
  textThree: string;
};

const ProductMatrix = (props: ProductMatrixProps) => {
  const { heading, imagesUrl, textOne, textTwo, textThree } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>

      {/* images container */}
      <View style={styles.imagesContainer}>
        {imagesUrl.map((item, index) => (
          <Image
            source={{
              uri: item,
            }}
            style={styles.image}
            key={index}
          />
        ))}

        {/* button */}
        <View style={styles.btnContainer}>
          <Text style={styles.btnTextOne}>{textOne}</Text>
          <Text style={styles.btnTextTwo}>{textTwo}</Text>
          <Text style={styles.btnTextThree}>{textThree}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductMatrix;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  heading: {
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },
  image: {
    width: 200,
    height: 200,
    margin: 5,
  },
  btnContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextOne: {
    fontSize: 25,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  btnTextTwo: {
    fontSize: 16,
    textTransform: "capitalize",
    marginTop: 5,
  },
  btnTextThree: {
    fontSize: 20,
    textTransform: "capitalize",
    color: "grey",
    marginTop: 5,
  },
});