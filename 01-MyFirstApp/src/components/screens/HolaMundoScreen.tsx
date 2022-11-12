import React from 'react'
import { View, Text } from 'react-native';

function HolaMundoScreen() {
  return (
    <View style={{flex:1, justifyContent: 'center', backgroundColor: 'green'}}>
      <Text style={{color: 'white', textAlign: 'center', fontSize: 50}}>Hola soy Carlos</Text>
    </View>
  )
}

export default HolaMundoScreen