import React from 'react'
import { Button, View } from 'react-native'

function WelcomeScreen({navigation}) {
    return (
        <View>
            <Button title="Login" onPress={() => navigation.navigate('LoginScreen')}/>
            <Button title="Register" onPress={() => navigation.navigate('RegisterScreen')}/>
        </View>
    )
}

export default WelcomeScreen
