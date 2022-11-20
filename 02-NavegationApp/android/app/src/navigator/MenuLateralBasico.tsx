import {useWindowDimensions} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import Settings from '../screens/Settings';
const Drawer: any = createDrawerNavigator();

function MyDrawer() {
    const  {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false,
            drawerType: width >= 500 ?"permanent": "front"
        }}
    >
      <Drawer.Screen name="StackNavigator" options={{title: "Home"}} component={StackNavigator} /> 
      <Drawer.Screen name="Settings" options={{title: "Settings"}} component={Settings} /> 
    </Drawer.Navigator>
  );
}
export default MyDrawer;