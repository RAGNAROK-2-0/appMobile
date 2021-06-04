import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Menu from './Screens/Menu';
import Cadastrar from './Screens/Cadastrar';
import Calcular from './Screens/Calcular';
import ItensCad from './Screens/ItensCad';
import AddItem from './Screens/AddItem';
import AddCustoFixo from './Screens/AddCustoFixo';
import AddCustoVariavel from './Screens/AddCustoVariavel';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: '#969DB0'}}} initialRouteName="Menu">

        <Stack.Screen options={{title:'CALCULA FÁCIL'}} name="Menu" component={Menu}/>

        <Stack.Screen options={
          {title:'ITENS CADASTRADOS',
          headerStyle: styles.headerStyle}
          }name="ItensCadastrados" component={ItensCad}/>

        <Stack.Screen options={
          {title:'CACULAR',
          headerStyle: styles.headerStyle}
          }name="Calcular" component={Calcular}/>

        <Stack.Screen options={
          {title:'CADASTRAR',
          headerStyle: styles.headerStyle}
          }name="Cadastrar" component={Cadastrar}/>

        <Stack.Screen options={
          {title:'ADICIONAR ITEM',
          headerStyle: styles.headerStyle}
          }name="AddItem" component={AddItem}/>

        <Stack.Screen options={
          {title:'ADICIONAR CUSTO FIXO',
          headerStyle: styles.headerStyle}
          }name="AddCustoFixo" component={AddCustoFixo}/>

        <Stack.Screen options={
          {title:'ADICIONAR CUSTO VARIÁVEL',
          headerStyle: styles.headerStyle}
          }name="AddCustoVariavel" component={AddCustoVariavel}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create ({
  headerStyle: {
  backgroundColor: '#969DB0'
},
  });
