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
    width: 120,
    alignItems: "center",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 65,
  },
  productType: {
    fontSize: 18,
    marginTop: 10,
    textTransform: "capitalize",
  },
});
