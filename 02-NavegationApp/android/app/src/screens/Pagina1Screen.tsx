import React, {useEffect} from 'react'
import { View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';

// import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

//EN ESTA PARTE NO UTILIZO NINGUN HOOK DE REACT NAVIGATION
// interface Props extends StackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

const  Pagina1Screen = ({navigation}: Props) => {  

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button 
          title='Menú'
          onPress={() => {navigation.toggleDrawer()}}
        />
      ),
      
    })
  }, [])


  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>
        <Button 
          title='Ir a página 2'
          onPress={( ) => navigation.navigate("Pagina2Screen")}
        />
        <TouchableOpacity style={styles.botonGrande} onPress={( ) => navigation.navigate("PersonaScreen", {
          id:1, 
          name: "Carlos",
        })}>
          <Text style={{color: 'white', fontSize: 20}}>Mandar props name: "carlos", id:1</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Pagina1Screen