import React, { useState } from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedbackBase } from 'react-native'

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
          Contador: {contador }
        </Text>

        <TouchableOpacity style={styles.fabLocationBL} onPress={( ) => setContador(contador-1)}>
          <View style={styles.fab}>
            <Text style ={styles.fabText}>-1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setContador(contador+1)} style={styles.fabLocationBR}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>+1</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
  },
  bottonIncrementar: {
    backgroundColor: 'red',
    borderRadius: 100
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 35,
    alignSelf: 'center',
  }

})
export default ContadorScreen