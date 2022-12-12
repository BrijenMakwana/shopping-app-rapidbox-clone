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
    minWidth: 65,
    marginHorizontal: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoryText: {
    fontWeight: "bold",
    fontSize: 13,
    textTransform: "capitalize",
    marginTop: 10,
  },
});
