import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './android/app/src/navigator/StackNavigator'
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    )
  }
}

export default App