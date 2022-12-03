import {useWindowDimensions, Text, View, Image, TouchableOpacity} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import Settings from '../screens/Settings';
import { styles } from '../theme/appTheme';
const Drawer: any = createDrawerNavigator();

function MenuLateral() {
    const  {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false,
            drawerType: width >= 500 ?"permanent": "front",
            
          }}
        drawerContent = {(props : any) => <MenuInterno />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} /> 
      <Drawer.Screen name="Settings" component={Settings} /> 
    </Drawer.Navigator>
  );
}
export default MenuLateral;

const MenuInterno = ({navigation} :any ) => {
   return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones de menú */}
      <View style = {styles.menuContainer}>

        <TouchableOpacity
          style={styles.menuBottom}
          onPress={() => {navigation.navigate("StackNavigator")}}
        >
          <Text style={styles.menuText}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBottom}
          onPress={() => {navigation.navigate("Settings")}}
        >
          <Text style={styles.menuText}>Ajustess</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
   )
}