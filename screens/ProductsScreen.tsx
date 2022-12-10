import { StyleSheet, FlatList, View } from "react-native";
import React, { useState } from "react";
import {
  sneakersData,
  jacketsData,
  casualShoesData,
  roundNeckData,
  topsData,
  shirtsData,
  dressesData,
} from "../assets/data/data";
import ProductItem from "../components/ProductItem";
import { useRoute } from "@react-navigation/native";

const ProductsScreen = () => {
  const [productData, setproductData] = useState("sneakersData");
  const route = useRoute();

  const productdata = (): any => {
    switch (route.params?.data) {
      case "sneakers":
        return sneakersData;
      case "jackets":
        return jacketsData;
      case "casual shoes":
        return casualShoesData;
      case "round necks":
        return roundNeckData;
      case "tops":
        return topsData;
      case "shirts":
        return shirtsData;
      case "dresses":
        return dressesData;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productdata()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductItem
            image={item.image}
            sellingPrice={item.sellingPrice}
            actualPrice={item.actualPrice}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
