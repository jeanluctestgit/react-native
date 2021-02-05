import React from 'react'
import { Text, View } from 'react-native'

function Banner(props) {
    return (
        <View style = {{
            display :  'flex',
            backgroundColor : 'crimson',
            alignItems : 'center',
            justifyContent : 'center',
            height : 45
          }}>
          
           <Text style = {{ color : 'white' }}>No Internet Access</Text>
          
          </View> 
    )
}

export default Banner
