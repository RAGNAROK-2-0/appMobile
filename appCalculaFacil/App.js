import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import ItensCad from './Screens/ItensCad';

import Menu from './Screens/Menu';

const Stack = createStackNavigator();
/*
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ItensCadastrados" component={Menu}
        options={{
          title: 'ITENS CADASTRADOS',
          headerStyle: {
            backgroundColor: '#969DB0',
            fontWeight: "bold",
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu}
        options={{
          title: 'CALCULA FÁCIL',
          headerStyle: {
            backgroundColor: '#969DB0',
            fontWeight: "bold",
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}