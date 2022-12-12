import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, View, Image, Text } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList, RootTabParamList } from "../types";
import CategoriesScreen from "../screens/CategoriesScreen";
import RewardsScreen from "../screens/RewardsScreen";
import BagScreen from "../screens/BagScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductScreen from "../screens/ProductScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const HeaderTitle = () => (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: 15, resizeMode: "contain", height: 20 }}
      />
      <Text
        style={{
          color: "#000",
          fontSize: 15,
          marginLeft: 5,
          fontWeight: "600",
        }}
      >
        Rapidbox
      </Text>
    </View>
  );

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "gray",
            borderBottomWidth: 0.2,
          },
          headerTintColor: "#000",
          headerLeft: () => (
            <Ionicons
              name="ios-reorder-three-outline"
              size={25}
              color="#000"
              style={{ padding: 10 }}
            />
          ),
          headerRight: () => (
            <AntDesign
              name="search1"
              size={23}
              color="#000"
              style={{ padding: 10 }}
            />
          ),
          headerTitle: () => <HeaderTitle />,
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="pentagon-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Bag"
        component={BagScreen}
        options={{
          title: "Bag",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="bag" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
