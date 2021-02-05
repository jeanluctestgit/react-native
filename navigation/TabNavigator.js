import React, { useEffect, useState } from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ProductNavigator from './ProductsNavigator';
import AuthNavigator from './AuthNavigator';
import ProfileNavigator from './ProfileNavigator';


const Tab = createBottomTabNavigator();

const TabNavigator = () => { return (<Tab.Navigator>
  <Tab.Screen name = "Welcome" component = {AuthNavigator} />
  <Tab.Screen name = "Products" component = {ProductNavigator} />
  <Tab.Screen name = "Profile" component = {ProfileNavigator} />
</Tab.Navigator>)
}

export default TabNavigator;