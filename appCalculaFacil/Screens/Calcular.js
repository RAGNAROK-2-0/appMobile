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
  TextInput,
} from 'react-native';



export default function Calcular({navigation}){

    return(
        <SafeAreaView style={{backgroundColor: '#D2D3D3'}}>
            <Text>Selecione o item</Text>
            <TextInput
            style={styles.inputs}/>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create ({

    inputs: {
        color: "#000",
        backgroundColor: "#fff",
    },
});