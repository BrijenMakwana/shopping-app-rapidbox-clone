import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProductMatrix = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BESTSELLERS</Text>

      {/* images container */}
      <View style={styles.imagesContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          }}
          style={styles.image}
        />
        {/* button */}
        <View style={styles.btnContainer}>
          <Text style={styles.btnTextOne}>Sneakers</Text>
          <Text style={styles.btnTextTwo}>for men</Text>
          <Text style={styles.btnTextThree}>+ see all</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductMatrix;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  heading: {
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },
  image: {
    width: 200,
    height: 200,
    margin: 5,
  },
  btnContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextOne: {
    fontSize: 25,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  btnTextTwo: {
    fontSize: 16,
    textTransform: "capitalize",
    marginTop: 5,
  },
  btnTextThree: {
    fontSize: 20,
    textTransform: "capitalize",
    color: "grey",
    marginTop: 5,
  },
});
