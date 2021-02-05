import React from 'react'
import { View , Text, Button} from 'react-native'

function ProfileScreen(props) {
    
    const handleDeconnect = () => {
        props.navigation.navigate('LoginScreen');
    }

    const handleUpdate = () => {
        props.navigation.navigate('EditProfileScreen' , 
        {'user_name' : JSON.parse(props.route.params.user_info).user_name 
        ,'user_email' : JSON.parse(props.route.params.user_info).user_email});
    }
    return (
        <View>
            <Text>Nom : </Text>
            <Text>{JSON.parse(props.route.params.user_info).user_name}</Text>
            <Text>Email : </Text>
            <Text>{JSON.parse(props.route.params.user_info).user_email}</Text>
            <Button title="Deconnexion" onPress={() => handleDeconnect() } />
            <Button title="Modifier" onPress={() => handleUpdate() } />
        </View>
    )
}

export default ProfileScreen
