import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export type ProductCategoryCardProps = {
  imageUrl: string;
  categoryName: string;
};

const ProductCategoryCard = (props: ProductCategoryCardProps) => {
  const { imageUrl, categoryName } = props;
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Products", {
          data: categoryName,
        })
      }
    >
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.inforContainer}>
        {/* category name */}
        <Text style={styles.categoryName}>{categoryName}</Text>
        {/* explore button */}
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>explore</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default ProductCategoryCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
  },
  image: {
    height: 210,
    width: 160,
  },
  inforContainer: {
    position: "absolute",
    bottom: 30,
    left: 15,
  },
  categoryName: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 3,
    width: 60,
    marginTop: 5,
  },
  btnText: {
    textAlign: "center",
    fontSize: 13,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
