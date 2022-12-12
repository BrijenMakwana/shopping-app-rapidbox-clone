import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductBlock = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.heading}>Easy 10 days returns and exchanges.</Text>
      <Text style={styles.description}>
        Choose to return or exchange for a different size within 10 days after
        delivery.
      </Text>
      <View style={styles.hr} />
    </View>
  );
};

const ProductSpecs = () => {
  return (
    <View style={styles.specsContainer}>
      <Text style={styles.heading}>Specifications:</Text>
      <Text style={styles.description}>Outer Material: Knitted Upper</Text>
      <Text style={styles.description}>Sole Material: PVC</Text>
      <Text style={styles.description}>Tvpe: Sneakers</Text>
      <Text style={styles.description}>Fastening and Back Detail: Lace Up</Text>
      <Text style={styles.description}>Country of Origin: India</Text>
    </View>
  );
};

const ProductDescription = () => {
  return (
    <View style={styles.container}>
      <ProductBlock />
      <ProductBlock />
      <ProductBlock />
      <ProductSpecs />
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  block: {
    marginVertical: 5,
  },
  heading: {
    fontSize: 13,
  },
  description: {
    fontSize: 12,
    fontWeight: "300",
    color: "gray",
    marginTop: 10,
  },
  hr: {
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    marginTop: 13,
  },
  specsContainer: {},
  specs: {},
});
