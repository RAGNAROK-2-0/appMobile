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



export default function Cadastrar({navigation}){
    const [nome, setNome] = React.useState(null);
    const [descricao, setDescricao] = React.useState(null);
    const [valor, setValor] = React.useState(null);
    const [unidadeMed, setUnidadeMed] = React.useState(null);
    const [quantidade, setQuantidade] = React.useState(null);
    const [data, setData] = React.useState(null);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Text style={styles.menu}>Selecione a opção desejada:</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddItem')}>
                    <Text style={styles.botao}>Item</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('AddCustoFixo')}>
                    <Text style={styles.botao}>Custo Fixo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('AddCustoVariavel')}>
                    <Text style={styles.botao}>Custo Variável</Text>
                </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>


        
    )
};


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#D2D3D3',
        alignItems: "center",
      },

    menu: {
    marginVertical: 100,
    textAlign: "center",
    textAlignVertical: 'center',
    fontSize: 25,

    },

    titles: {
        fontWeight: "bold",
        marginHorizontal: 50,
        marginVertical: 3,
        textAlign: "center",
    
    },

    inputs: {
        color: "#000",
        backgroundColor: "#fff",
        marginHorizontal: 30,
        marginVertical: 0,
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
        textAlignVertical: 'center',
        fontSize: 25,
        height: 60,
        width: 250,
        
        
    }
});