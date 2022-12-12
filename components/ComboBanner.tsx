import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ComboBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Super Combos</Text>
      <View style={styles.productsContainer}>
        <View style={styles.productCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
            style={styles.productImage}
          />
          <Text style={styles.offerText}>Any 2 Sneakers</Text>
          <Text style={styles.price}>
            <Text style={{ fontSize: 10 }}>₹</Text>999
          </Text>
        </View>
        <View style={styles.productCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            }}
            style={styles.productImage}
          />
          <Text style={styles.offerText}>Any 2 Sneakers</Text>
          <Text style={styles.price}>
            <Text style={{ fontSize: 10, textAlignVertical: "top" }}>₹</Text>999
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ComboBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#77D1C4",
    marginTop: 7,
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  heading: {
    textTransform: "capitalize",
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    padding: 10,
    marginTop: 5,
  },
  productsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  productCard: {
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
  },
  productImage: {
    width: 150,
    height: 180,
  },
  offerText: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "600",
  },
  price: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: "600",
  },
});
