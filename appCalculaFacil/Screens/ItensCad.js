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

const DATA = [
  {
    id: '01',
    title: 'Bombom de Leite Ninho',
  },
  {
    id: '02',
    title: 'Brigadeiro',
  },
  {
    id: '03',
    title: 'Mousse de Limão',
  },
  {
    id: '04',
    title: 'Bolo 2k',
  },
  {
    id: '05',
    title: 'Pavlova de Morango',
  },
  {
    id: '06',
    title: 'Torta de Limão',
  },
];


const Item = ({title}) => (
  <View style={styles.item}>
    <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default function ItensCad({navigation}){
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
      
      <Text style={styles.head}></Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2D3D3',
  },
  head:{
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
