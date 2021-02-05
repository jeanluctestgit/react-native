import React , {useState} from "react";
import { View, TextInput, Text, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function EditProfileScreen(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleValidate = async () => {
    if (!userName) {
        alert("Please fill Email");
        return;
      }
      if (!userEmail) {
        alert("Please fill Email");
        return;
      }
    
      AsyncStorage.getItem(userEmail).then(data => {
        const userInfo = JSON.parse(data);
        userInfo.user_name = userName;
        userInfo.user_email = userEmail;

        AsyncStorage.setItem(userEmail , JSON.stringify(userInfo))
      });

  };
  return (
    <View>
      <Text>Nom:</Text>
      <TextInput
        onChangeText={(userName) => setUserName(userName)}
      />
      <Text>Email:</Text>
      <TextInput
        onChangeText={(userEmail) => setUserEmail(userEmail)}
      />
      <Button title="Valider" onPress={() => handleValidate()} />
    </View>
  );
}

export default EditProfileScreen;
