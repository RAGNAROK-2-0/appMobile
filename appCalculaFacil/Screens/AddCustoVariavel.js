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
  Picker,
} from 'react-native';




export default function AddCustoFixo({navigation}){
    const [descricao, setDescricao] = React.useState(null);
    const [valor, setValor] = React.useState(null);
    const [unidadeMed, setUnidadeMed] = React.useState(null);
    const [quantidade, setQuantidade] = React.useState(null);
    const [item, setItem] = React.useState("null");

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
            <Text style={styles.titles}></Text>
            <Text style={styles.title}>Selecione o Item:</Text>
            <Picker
 
            style={{height: 100, width: 200, marginHorizontal: 50}}
            selectedValue={item}
            onValueChange={(itemValue, itemIndex) => setItem(itemValue)}>
                <Picker.Item label="Brigadeiro" value='1'/>
                <Picker.Item label="Torta" value='2'/>
                <Picker.Item label="Pastel" value='3'/>
            </Picker>
            <Text style={styles.titles}>Descrição do Custo:</Text>
            <TextInput
            style={styles.inputs}
            keyboardType="default"
            onChangeText={(val) => setDescricao(val)}
            />

            <Text style={styles.titles}>Valor do Custo:</Text>
            <TextInput
            style={styles.inputs}
            keyboardType="numeric"
            onChangeText={(val) => setValor(val)}
            />

            <Text style={styles.titles }>Unidade de Medida:</Text>
            <TextInput
            style={styles.inputs}
            onChangeText={(val) => setUnidadeMed(val)}
            />

            <Text style={styles.titles }>Quantidade:</Text>
            <TextInput
            style={styles.inputs}
            keyboardType="numeric"
            onChangeText={(val) => setQuantidade(val)}
            />
            <TouchableOpacity onPress={(Salvar)}>
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

    title: {
        fontWeight: "bold",
        marginHorizontal: 50,
        marginVertical: 3,
        textAlign: "center",
        fontSize: 25,
    
    },

    titles: {
        fontWeight: "bold",
        marginHorizontal: 40,
        marginVertical: 3,
        textAlign: "center",
        fontSize: 20,
    
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
        marginHorizontal: 90,
        marginVertical: 30,
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 5,
        textAlign: "center",
        fontSize: 25,
        height: 40,
        width: 180,
    },

    picker: {
        backgroundColor: '#000',
        borderColor: '#969DB0',
        borderWidth: 3,
    }
});