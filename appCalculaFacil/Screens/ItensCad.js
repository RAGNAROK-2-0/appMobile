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
} from 'react-native';

import api from './services.js';

const DATA = [
  {
    id: '01',
    nameOfMonth: 'Bombom de Leite Ninho',
  },
  {
    id: '02',
    nameOfMonth: 'Brigadeiro',
  },
  {
    id: '03',
    nameOfMonth: 'Mousse de Limão',
  },
  {
    id: '04',
    nameOfMonth: 'Bolo 2k',
  },
  {
    id: '05',
    nameOfMonth: 'Pavlova de Morango',
  },
  {
    id: '06',
    nameOfMonth: 'Torta de Limão',
  },
];

export default function ItensCad({navigation}) {

  const [DATA, setDATA] = React.useState([])

  

  const Item = ({title,dadoDoItem}) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          // carregaItens();
          console.warn(dadoDoItem.numberOfMonth)
        }}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  async function carregaItens() {
    setloading(true)
    await api
      .post('/banco/calendar/carregaCalendario.php', {
        year: '2021',
      })
      .then(response => {
        setDATA(response.data[0].months[0].week[2].event);
      })
      .catch(error => console.warn(error));
  }

  const renderItem = ({item,index}) => <Item title={item.nameOfMonth} dadoDoItem={item} />;
  return (

    <View style={styles.container}>
      <Text style={styles.head}></Text>
      <TouchableOpacity
        onPress={() => {
          carregaItens();
        }}>
        <Text style={styles.title}>teste</Text>
      </TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item,index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2D3D3',
  },
  head: {
    marginVertical: 10,
  },

  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 22,
  },
});
