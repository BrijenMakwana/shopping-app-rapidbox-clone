import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";
import ProductDescription from "../components/ProductDescription";
import { useRoute } from "@react-navigation/native";

const ShareProduct = () => {
  return (
    <View style={styles.shareContainer}>
      <Text style={styles.shareText}>
        Share this product with your friends And earn 75 Rapidcoins
      </Text>
      <View style={styles.iconContainer}>
        <FontAwesome name="whatsapp" size={22} color="#fff" />
        <Text style={styles.iconText}>share</Text>
      </View>
    </View>
  );
};

const ProductStates = () => {
  return (
    <View style={styles.statesContainer}>
      <View style={styles.stateContainer}>
        <View style={styles.stateIconContainer}>
          <AntDesign name="hearto" size={24} color="#000" />
          <Text style={styles.stateNumber}>0</Text>
        </View>
        <Text style={styles.stateName}>Likes</Text>
      </View>

      <View style={styles.stateContainer}>
        <View style={styles.stateIconContainer}>
          <MaterialCommunityIcons
            name="pentagon-outline"
            size={24}
            color="#000"
          />
          <Text style={styles.stateNumber}>0</Text>
        </View>
        <Text style={styles.stateName}>Coins earned</Text>
      </View>

      <View style={styles.stateContainer}>
        <View style={styles.stateIconContainer}>
          <EvilIcons name="share-google" size={26} color="#000" />
          <Text style={styles.stateNumber}>0</Text>
        </View>
        <Text style={styles.stateName}>Shares</Text>
      </View>
    </View>
  );
};

const ColorsAvailable = () => {
  return (
    <View style={styles.colorAvailableContainer}>
      <Text style={styles.colorHeading}>Colors available</Text>
      <View style={styles.availableImagesContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1576672843344-f01907a9d40c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={styles.availableImage}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1576672843344-f01907a9d40c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={styles.availableImage}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1576672843344-f01907a9d40c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          style={styles.availableImage}
        />
      </View>
    </View>
  );
};

const DeliveryComponent = () => {
  return (
    <View style={styles.deliveryComponentContainer}>
      <MaterialCommunityIcons
        name="truck-delivery-outline"
        size={24}
        color="#FFAC4A"
      />
      <Text style={styles.deliveryMessage}>
        Yay! <Text style={styles.freeDelivery}>Free Delivery</Text> on this
        order.
      </Text>
    </View>
  );
};

const SizeComponent = () => {
  return (
    <View style={styles.sizeContainer}>
      <View style={styles.header}>
        <Text style={styles.heading}>Select our size</Text>
        <Text style={styles.sizeChartText}>SIZE CHART</Text>
      </View>
      <View style={styles.sizes}>
        <View style={styles.size}>
          <Text style={styles.sizeText}>6</Text>
        </View>
        <View style={styles.size}>
          <Text style={styles.sizeText}>7</Text>
        </View>
        <View style={styles.size}>
          <Text style={styles.sizeText}>8</Text>
        </View>
        <View style={styles.size}>
          <Text style={styles.sizeText}>9</Text>
        </View>
      </View>
      <Text style={styles.checkDelivery}>Check delivery</Text>
      <Text style={styles.pincode}>Enter our pincode</Text>
    </View>
  );
};

const ShareProductWithAvatar = () => {
  return (
    <View style={styles.shareProductwithAvatarContainer}>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2016/04/01/10/52/blonde-1300066_960_720.png",
        }}
        style={styles.avatarImage}
      />
      <View style={styles.shareTextContainer}>
        <Text style={styles.shareTextAvatar}>
          Share this product with your friends and get 75 Rapidcoins on each
          purchase they make
        </Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="whatsapp" size={22} color="#fff" />
          <Text style={styles.iconText}>share</Text>
        </View>
      </View>
    </View>
  );
};

export type ProductScreenProps = {
  imageUrl: string;
};

const ProductScreen = (props: ProductScreenProps) => {
  const { imageUrl } = props;
  const route = useRoute();
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: route.params?.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.productInfo}>
        <View style={styles.priceContainer}>
          <View style={styles.prices}>
            <Text style={styles.sellingPrice}>₹595</Text>
            <Text style={styles.actualprice}>₹999</Text>
          </View>
          <Text style={styles.discount}>40% off</Text>
        </View>
        <Text style={styles.name}>Atom brown Sneakers</Text>
        <View style={styles.ratingContainer}>
          <Entypo name="star" size={35} color="#FFF038" />
          <Entypo name="star" size={35} color="#FFF038" />
          <Entypo name="star" size={35} color="#FFF038" />
          <Entypo name="star" size={35} color="#FFF038" />
          <Entypo name="star" size={35} color="#FFF038" />
          <Text style={styles.rating}>4.1</Text>
          <Text style={styles.totalRating}>(2709)</Text>
        </View>
      </View>
      <ShareProduct />
      <ProductStates />
      <ColorsAvailable />
      <DeliveryComponent />
      <SizeComponent />
      <ShareProductWithAvatar />
      <ProductDescription />
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  image: {
    width: "100%",
    height: 500,
  },
  productInfo: {
    padding: 20,
    backgroundColor: "#fff",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  prices: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  sellingPrice: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#FFF038",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  actualprice: {
    fontSize: 16,
    fontWeight: "200",
    marginLeft: 10,
    textDecorationColor: "grey",
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
  },
  discount: {
    fontSize: 16,
    fontWeight: "300",
    color: "#FFA500",
  },
  name: {
    marginTop: 7,
    fontSize: 16,
    fontWeight: "400",
    color: "grey",
    textTransform: "capitalize",
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  rating: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "500",
  },
  totalRating: {
    marginLeft: 5,
    fontSize: 15,
    color: "grey",
    fontWeight: "300",
  },
  shareContainer: {
    backgroundColor: "#E8E8E8",
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shareText: {
    fontSize: 14,
    flex: 1,
    marginRight: 15,
  },
  iconContainer: {
    flexDirection: "row",
    backgroundColor: "#4BAD33",
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    textTransform: "uppercase",
  },
  statesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#fff",
    paddingBottom: 30,
  },
  stateContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    justifyContent: "flex-end",
  },
  stateIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stateNumber: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 3,
  },
  stateName: {
    marginTop: 5,
    fontSize: 15,
    color: "gray",
    textTransform: "capitalize",
  },
  colorAvailableContainer: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  colorHeading: {
    fontSize: 15,
    color: "gray",
  },
  availableImagesContainer: {
    flexDirection: "row",
    padding: 15,
  },
  availableImage: {
    width: 30,
    height: 40,
    marginHorizontal: 20,
  },
  deliveryComponentContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 5,
  },
  deliveryMessage: {
    fontSize: 15,
    color: "gray",
    marginLeft: 5,
    fontWeight: "300",
  },
  freeDelivery: {
    fontWeight: "600",
    color: "#FFAC4A",
    textTransform: "capitalize",
  },
  sizeContainer: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 15,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 15,
    color: "gray",
    fontWeight: "300",
  },
  sizeChartText: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  sizes: {
    marginTop: 20,
    flexDirection: "row",
  },
  size: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 14,
    fontWeight: "600",
  },
  checkDelivery: {
    fontSize: 14,
    color: "gray",
    fontWeight: "300",
    marginTop: 20,
  },
  pincode: {
    fontSize: 12,
    color: "gray",
    fontWeight: "500",
    marginTop: 20,
    textDecorationLine: "underline",
    textDecorationColor: "gray",
    textDecorationStyle: "solid",
  },
  shareProductwithAvatarContainer: {
    flexDirection: "row",
    padding: 10,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#FFF038",
    borderRadius: 10,
    marginVertical: 10,
  },
  avatarImage: {
    width: 60,
    resizeMode: "contain",
  },
  shareTextContainer: {
    marginLeft: 10,
    width: "70%",
  },
  shareTextAvatar: {
    fontSize: 14,
    marginBottom: 20,
    color: "gray",
    fontWeight: "300",
  },
});
