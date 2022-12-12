import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export type ProductCircleProps = {
  imageUrl: string;
  productType: string;
};

const ProductCircle = (props: ProductCircleProps) => {
  const { imageUrl, productType } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.productType}>{productType}</Text>
    </View>
  );
};

export default ProductCircle;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  productType: {
    fontSize: 15,
    marginTop: 7,
    textTransform: "capitalize",
    fontWeight: "300",
    textAlign: "center",
  },
});
