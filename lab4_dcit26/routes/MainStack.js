import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';



import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();
const MainNavigator = () => {


  return(
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name='Home' component={ HomeStack } 
        options={{
          drawerIcon: ({focused, size, color}) => (<Ionicons                               name='home-outline' size={28} color='black' />)}}/> 
      <Drawer.Screen name='About' component={ AboutStack } 
         options={{drawerIcon: ({focused, size, color}) => (<Ionicons 
         name='terminal-outline' size={28} color='black'/>)}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

