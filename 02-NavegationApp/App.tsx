import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { StackNavigator } from './android/app/src/navigator/StackNavigator'
import MenuLateralBasico from './android/app/src/navigator/MenuLateralBasico';
import MenuLateral from './android/app/src/navigator/MenuLateral';
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
      </NavigationContainer>
    )
  }
}

export default App