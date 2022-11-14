import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
//EN ESTA PARTE SI USO HOOK DE REACT NAVIGATION

const Pagina2Screen = ( ) => {
  const navigator = useNavigation<any>();
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina2Screen</Text>
        <Button 
          title="Ir a página 3"
          onPress={() => navigator.navigate('Pagina3Screen')}
        />
    </View>         
  )
}

export default Pagina2Screen