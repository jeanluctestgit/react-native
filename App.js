import React, { useEffect, useState } from "react";

import Banner from "./components/Banner";

import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useNetInfo } from "@react-native-community/netinfo";

import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import AppLoading from 'expo-app-loading';

const getIsAuthenticated = async () => {
  const data = await AsyncStorage.getItem("security");
  return data === null ? false : JSON.parse(data) && true;
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady , setIsReady] = useState(false);

  const netInfo = useNetInfo();

  useEffect(() => {
    setIsAuthenticated(getIsAuthenticated());
    console.log(isAuthenticated);
  }, []);

  if(!isReady){
    return <AppLoading startAsync = { getIsAuthenticated } onError = {(error) => console.log(error)} onFinish= { () => setIsReady(true)}/>
  }
  return (
    <SafeAreaView style={styles.container}>
      {!netInfo.isInternetReachable && <Banner />}
      <NavigationContainer>
        {isAuthenticated ? <TabNavigator /> : <AuthNavigator isAuthenticated = { isAuthenticated }/>}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    flex: 1,
  },
});
