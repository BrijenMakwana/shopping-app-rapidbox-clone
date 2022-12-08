import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export type CategoryProps = {
  imageUrl: string;
  categoryName: string;
};

const Category = (props: CategoryProps) => {
  const { imageUrl, categoryName } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.categoryText}>{categoryName}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minWidth: 80,
    marginHorizontal: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryText: {
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "capitalize",
    marginTop: 10,
  },
});
