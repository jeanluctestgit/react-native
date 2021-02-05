import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "../Screens/ProductListScreen";
import ProductDetailsScreen from "../Screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Products" component={ProductListScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ProductNavigator;