import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import cache from '../utility/cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegisterScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmitPress = async () => {
    if (!userName) {
      alert("Please fill Email");
      return;
    }
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    const userInfo = {
        "user_name" : userName,
        "user_email" : userEmail,
        "user_password" : userPassword
    }
    
    await AsyncStorage.setItem(userEmail , JSON.stringify(userInfo))
    navigation.navigate('LoginScreen');
   
    

    
  };
  return (
    <View>
      <Text>Nom</Text>
      <TextInput onChangeText={(userName) => setUserName(userName)}></TextInput>
      <Text>Email</Text>
      <TextInput
        onChangeText={(userEmail) => setUserEmail(userEmail)}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        onChangeText={(userPassword) => setUserPassword(userPassword)}
      ></TextInput>
      <Button title="Register" onPress={() => handleSubmitPress()} />
    </View>
  );
}

export default RegisterScreen;
