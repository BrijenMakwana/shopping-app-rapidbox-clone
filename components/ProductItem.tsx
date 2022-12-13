import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export type ProductItemProps = {
  image: string;
  actualPrice: number;
  sellingPrice: number;
  rating: number;
};

const ProductItem = (props: ProductItemProps) => {
  const { image, actualPrice, sellingPrice, rating } = props;
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Product", {
          imageUrl: image,
          actualPrice: actualPrice,
          sellingPrice: sellingPrice,
          rating: rating,
        })
      }
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.premiumContainer}>
        <Text style={styles.premiumText}>premium</Text>
      </View>
      <View style={styles.productInformation}>
        {/* price */}
        <View style={styles.priceContainer}>
          <Text style={styles.sellingPrice}>₹{sellingPrice}</Text>
          <Text style={styles.actualPrice}>₹{actualPrice}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Entypo name="star" size={16} color="#FFB934" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "lightgrey",
    width: "50%",
  },
  image: {
    width: "100%",
    height: 250,
  },
  premiumContainer: {
    backgroundColor: "#FFF200",
    position: "absolute",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    top: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  premiumText: {
    fontSize: 10,
  },
  productInformation: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },
  priceContainer: {
    flexDirection: "row",
  },
  sellingPrice: {
    fontSize: 16,
  },
  actualPrice: {
    fontSize: 16,
    marginLeft: 5,
    color: "grey",
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    textDecorationColor: "grey",
    fontWeight: "200",
  },
  ratingContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
  rating: {
    fontSize: 13,
    marginLeft: 1,
  },
});
