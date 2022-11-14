import React, {useEffect} from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
interface Props extends StackScreenProps<any, any>{};

function PersonaScreen({route, navigation}: Props) {
    // console.log(JSON.stringify(props, null, 3))
    // Nota: el console.log de arriba imprime en forma ordenada props
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
        title: "Datos enviados a formato JSON",
    })
  },[])
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>EN ESTA SCREEN ESTAN LAS PROPS ENVIADAS POR LA PÁGINA 1</Text>
        <Text style={{fontSize: 30}}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  )
}

export default PersonaScreen