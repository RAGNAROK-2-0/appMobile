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



export default function Cadastrar({navigation}){
    const [nomeItem, descricao, valor, unidadeMed, 
        quantidade, data, inputUsuario] = React.useState("Digite aqui");
    return(
        <SafeAreaView style={{backgroundColor: '#D2D3D3'}}>
            <Text style={styles.titles}>Nome do Item:</Text>
            <TextInput
            style={styles.inputs}
            onChangeText={inputUsuario}
            value={nomeItem}/>

            <Text style={styles.titles}>Descrição:</Text>
            <TextInput
            style={styles.inputs}
            onChangeText={inputUsuario}
            value={descricao}/>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create ({

    titles: {
        fontWeight: "bold",
        marginHorizontal: 10,
    },

    inputs: {
        color: "#000",
        backgroundColor: "#fff",
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 5,

    },
});