import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';


import Home from '../screen/Home';
import Profile from '../screen/Profile';


const Stack = createStackNavigator();
const HomeStack = () => {
  
  return (
      <Stack.Navigator 
        screenOptions= {{
          headerStyle: {
            backgroundColor: 'white' 
          },
          headerTitleStyle :{
            fontWeight: 'bold',
          },
          headerTintColor: 'black',
        }}
        >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

  );
}


export default HomeStack;




