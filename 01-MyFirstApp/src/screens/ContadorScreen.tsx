import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Fab from '../components/Fab';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
          Contador: {contador }
        </Text>
        <Fab title = "+1" position="br" onPress={() => setContador(e => e+1)} />
        <Fab title = "-1" position="bl" onPress={() => setContador(e => e-1)} />
        {/* <TouchableOpacity style={styles.fabLocationBL} onPress={( ) => setContador(contador-1)}>
          <View style={styles.fab}>
            <Text style ={styles.fabText}>-1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setContador(contador+1)} style={styles.fabLocationBR}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>+1</Text>
          </View>
        </TouchableOpacity> */}
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
  
})
export default ContadorScreen