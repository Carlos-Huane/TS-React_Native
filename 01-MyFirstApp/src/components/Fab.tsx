import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
interface Props {
    title: string;
    position: "br" | "bl";
    onPress: () => void;
}
const Fab = ({title, position,onPress}: Props) => {

  return (
    <TouchableOpacity 
        style={position==="br"?styles.fabLocationBR: styles.fabLocationBL}
        onPress={onPress}
    >
        <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
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
export default Fab;