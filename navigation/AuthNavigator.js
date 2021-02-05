import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import DashboardScreen from "../Screens/DashboardScreen";

const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={props.isAuthenticated ? DashboardScreen : WelcomeScreen}
        options={{ headerShown: props.isAuthenticated }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
