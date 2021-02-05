import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import cache from '../utility/cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({navigation}) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmitPress =  () => {

    if (!userEmail) {
        alert('Please fill Email');
        return;
      }
      if (!userPassword) {
        alert('Please fill Password');
        return;
      }
    
   /* cache.getFromStore(userEmail).then(userInfo => {
        navigation.navigate('ProfileScreen' , {'user_info' : userInfo});

    })*/
    AsyncStorage.getItem(userEmail).then(data => {
        navigation.navigate('ProfileScreen' , {'user_info' : data});
    });
    
  };
  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <View style={styles.fieldContainer}>
          <Text>Email:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            value = {userEmail}
          ></TextInput>
        </View>
        <View style={styles.fieldContainer}>
          <Text>Password :</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            value = {userPassword}
          ></TextInput>
        </View>
      </View>
      <Button title="LOGIN" onPress={() => handleSubmitPress()} />
    </View>
  );
  
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fields: {
    justifyContent: "flex-start",
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "row",
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
