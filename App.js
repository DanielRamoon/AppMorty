import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PreLoad from './src/Components/Pages/PreLoad';
import Home from './src/Components/Pages/Home/Index';
import Detail from './src/Components/Pages/Detail'


const Stack = createStackNavigator()

export default function app() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='PreLoad' >
        
        <Stack.Screen name="PreLoad" component={PreLoad} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



