import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Category from "./Category";
import { categoriesData } from "../assets/data/data";

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData}
        renderItem={({ item }) => (
          <Category imageUrl={item.imageUrl} categoryName={item.categoryName} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
  },
});
