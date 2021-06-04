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
  Alert,
  ScrollView,
} from 'react-native';

export default function AddItem({navigation}){
    const [nome, setNome] = React.useState(null);

 
    function Salvar(){
        return(
            Alert.alert('Dados salvos com sucesso!','Clique em continuar para novos cadastros', [
                {text: 'Continuar', onPress: () => navigation.navigate('Cadastrar')},
                {text: 'Voltar ao menu', onPress: () => navigation.navigate('Menu')}
            ])
        )
            
    }


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Text style={styles.menu}></Text>
            <Text style={styles.titles}>Nome do Item:</Text>
            <TextInput
            style={styles.inputs}
            onChangeText={(val) => setNome(val)}
            />
            
            <TouchableOpacity onPress={(Salvar)} >
                    <Text style={styles.botao}>Salvar</Text>
                </TouchableOpacity>


            </ScrollView>
            </SafeAreaView>


  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#D2D3D3',
        alignItems: "center",
      },

    menu: {
    marginVertical: 110,

    },

    titles: {
        fontWeight: "bold",
        marginHorizontal: 50,
        marginVertical: 3,
        textAlign: "center",
        fontSize: 25,
    
    },

    inputs: {
        color: "#000",
        backgroundColor: "#fff",
        marginHorizontal: 0,
        marginVertical: 15,
        borderRadius: 5,
        borderColor: '#969DB0',
        borderWidth: 1,

    },

    botao: {
        backgroundColor: '#969DB0',
        marginHorizontal: 50,
        marginVertical: 30,
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 5,
        textAlign: "center",
        fontSize: 25,
        height: 40,
        width: 180,
    }
});