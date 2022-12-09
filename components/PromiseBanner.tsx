import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

export type PromiseBoxProps = {
  promiseText: string;
};

const PromiseBox = (props: PromiseBoxProps) => {
  const { promiseText } = props;
  return (
    <View style={styles.promiseContainer}>
      <Text style={styles.promiseText}>{promiseText}</Text>
    </View>
  );
};

export type PromiseBannerProps = {
  promises: string[];
};

const PromiseBanner = (props: PromiseBannerProps) => {
  const { promises } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.heading}>Rapidbox Promise</Text>
        <View style={styles.promisesContainer}>
          {promises.map((item, index) => (
            <PromiseBox promiseText={item} key={index} />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default PromiseBanner;

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  image: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  heading: {
    color: "#fff",
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "bold",
  },
  promisesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    width: "100%",
  },
  promiseContainer: {
    borderWidth: 2,
    borderColor: "#000",
    minWidth: 70,
    minHeight: 70,
    maxWidth: 100,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  promiseText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
