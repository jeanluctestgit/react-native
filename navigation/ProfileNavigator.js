import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../Screens/ProfileScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;