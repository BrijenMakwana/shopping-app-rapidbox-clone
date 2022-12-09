import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCategoryCard from "./ProductCategoryCard";
import { ProductCategoryCardsData } from "../assets/data/data";

const ProductCategoriesCardContainer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ProductCategoryCardsData}
        renderItem={({ item }) => (
          <ProductCategoryCard
            imageUrl={item.imageUrl}
            categoryName={item.categoryName}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductCategoriesCardContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
  },
});
