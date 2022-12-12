import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export type SimilarProductProps = {
  image: string;
  actualPrice: number;
  sellingPrice: number;
  rating: number;
};

const SimilarProduct = (props: SimilarProductProps) => {
  const { image, actualPrice, sellingPrice, rating } = props;
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Product", {
          imageUrl: image,
        })
      }
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.productInformation}>
        {/* price */}

        <Text style={styles.sellingPrice}>₹{sellingPrice}</Text>
        <Text style={styles.actualPrice}>₹{actualPrice}</Text>
      </View>
    </Pressable>
  );
};

export default SimilarProduct;

const styles = StyleSheet.create({
  container: {
    width: 125,
    marginRight: 13,
  },
  image: {
    width: "100%",
    height: 180,
  },
  productInformation: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },

  sellingPrice: {
    fontSize: 13,
    fontWeight: "600",
  },
  actualPrice: {
    fontSize: 12,
    marginLeft: 5,
    color: "grey",
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    textDecorationColor: "grey",
    fontWeight: "200",
  },
});
