import { StyleSheet, ScrollView } from "react-native";
import Categories from "../components/Categories";
import PorductBanner from "../components/PorductBanner";
import {
  circleProductsHisData,
  circleProductsHerData,
} from "../assets/data/data";
import ProductMatrix from "../components/ProductMatrix";
import { productMatrixData } from "../assets/data/data";
import SingleProductBanner from "../components/SingleProductBanner";

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Categories />
      <PorductBanner
        backgroundImage="https://images.unsplash.com/photo-1614853035846-77b0a40a6b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        heading="his wordrobe"
        products={circleProductsHisData}
      />
      <PorductBanner
        backgroundImage="https://images.unsplash.com/photo-1617957771979-a91027b58dd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        heading="her wordrobe"
        products={circleProductsHerData}
      />
      <ProductMatrix
        heading={productMatrixData.heading}
        imagesUrl={productMatrixData.imagesUrl}
        textOne={productMatrixData.textOne}
        textTwo={productMatrixData.textTwo}
        textThree={productMatrixData.textThree}
      />
      <SingleProductBanner />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
