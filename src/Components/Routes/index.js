import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PreLoad from '../Pages/PreLoad';
import Home from '../Pages/Home';
import Detail from '../Pages/Detail'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PreLoad" component={PreLoad} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}