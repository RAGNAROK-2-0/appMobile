import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';


export default function Menu({navigation}){

  function GetOut(){
    return(
      Alert.alert("Atenção!", "Deseja realmente sair?", [
        {
          text: "Não",
          onPress: () => navigation.navigate('Menu'),
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() }
      ])
  )
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.menu}>MENU</Text>
      <View style={styles.part1}>
        <TouchableOpacity onPress={() => navigation.navigate('Calcular')}>
        <Text style={styles.item}>CALCULAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ItensCadastrados')}>
        <Text style={styles.item}>ITENS CADASTRADOS</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.part2}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
        <Text style={styles.item}>ADICIONAR ITENS E CUSTOS</Text>
        </TouchableOpacity> 

        <TouchableOpacity onPress={(GetOut)}>
        <Text style={styles.item}>SAIR</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>  
  )
    
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#969DB0',
  },
  menu: {
    fontSize: 50,
    textAlign: "center",
    marginVertical: 25,
    textDecorationLine: "underline"
  },
  item: {
    backgroundColor: '#fff',
    marginVertical: 30,
    marginHorizontal: 15,
    borderRadius: 5,
    height: 170,
    width: 170,
    fontSize: 17,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
  },

  part1: {
    flexDirection: "row",

},
  part2: {
    flexDirection: "row",

},
});
