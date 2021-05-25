import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Screens/Menu';
import Cadastrar from './Screens/Cadastrar';
import Calcular from './Screens/Calcular';
import ItensCad from './Screens/ItensCad';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          title: 'CALCULA FÁCIL',
          headerStyle: {
          backgroundColor: '#969DB0'}}} initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="ItensCadastrados" component={ItensCad}/>
        <Stack.Screen name="Calcular" component={Calcular}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}