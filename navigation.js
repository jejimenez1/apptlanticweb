import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/views/home.js';
import precio from './src/views/precio.js';
import cantidad from './src/views/cantidad.js';
import eficiencia from './src/views/eficiencia.js';
import capacidad from './src/views/capacidad.js';
import calculadora from './src/views/calculadora.js';
import calculadorafull from './src/views/calculadorafull.js';
import campana from './src/views/campana.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='calculadorafull'>
        <Stack.Screen name='home' component={home}/>
        <Stack.Screen name='precio' component={precio}/>
        <Stack.Screen name='cantidad' component={cantidad}/>
        <Stack.Screen name='eficiencia' component={eficiencia}/>
        <Stack.Screen name='capacidad' component={capacidad}/>
        <Stack.Screen name='calculadora' component={calculadora}/>
        <Stack.Screen name='calculadorafull' component={calculadorafull} options={{headerShown: false}} />
        <Stack.Screen name='campana' component={campana}/>
      </Stack.Navigator>

    </NavigationContainer>
    </>
  )
}