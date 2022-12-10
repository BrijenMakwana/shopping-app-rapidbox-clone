import { StyleSheet, View, FlatList } from "react-native";
import Categories from "../components/Categories";
import PorductBanner from "../components/PorductBanner";
import {
  circleProductsHisData,
  circleProductsHerData,
  productMatrixData2,
} from "../assets/data/data";
import ProductMatrix from "../components/ProductMatrix";
import {
  productMatrixData,
  promiseData,
  ProductThreeImagesDataHis,
  ProductThreeImagesDataHer,
  sneakersData,
} from "../assets/data/data";
import SingleProductBanner from "../components/SingleProductBanner";
import ComboBanner from "../components/ComboBanner";
import FanCard from "../components/FanCard";
import ProductCategoriesCardContainer from "../components/ProductCategoriesCardContainer";
import HorizontalBanner from "../components/HorizontalBanner";
import PromiseBanner from "../components/PromiseBanner";
import ProductThreeImage from "../components/ProductThreeImage";
import ProductItem from "../components/ProductItem";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* products */}
      <FlatList
        data={sneakersData}
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
        ListHeaderComponent={
          <>
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
            <ComboBanner />
            <FanCard />
            <ProductCategoriesCardContainer />
            <HorizontalBanner />
            <PromiseBanner promises={promiseData} />
            <ProductMatrix
              heading={productMatrixData2.heading}
              imagesUrl={productMatrixData2.imagesUrl}
              textOne={productMatrixData2.textOne}
              textTwo={productMatrixData2.textTwo}
              textThree={productMatrixData2.textThree}
            />
            <ProductThreeImage
              heading={ProductThreeImagesDataHis.heding}
              imagesUrl={ProductThreeImagesDataHis.imagesUrl}
              btnTextOne={ProductThreeImagesDataHis.textOne}
              btnTextTwo={ProductThreeImagesDataHis.textTwo}
              btnTextThree={ProductThreeImagesDataHis.textThree}
            />
            <ProductThreeImage
              heading={ProductThreeImagesDataHer.heding}
              imagesUrl={ProductThreeImagesDataHer.imagesUrl}
              btnTextOne={ProductThreeImagesDataHer.textOne}
              btnTextTwo={ProductThreeImagesDataHer.textTwo}
              btnTextThree={ProductThreeImagesDataHer.textThree}
            />
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
