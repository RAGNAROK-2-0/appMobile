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
    title: 'CALCULAR',
  },
  {
    id: '02',
    title: 'CADASTRAR',
  },
  {
    id: '03',
    title: 'ITENS \nCADASTRADOS',
  },
  {
    id: '04',
    title: 'SAIR',
  },
];


const Item = ({title}) => (
  <View style={styles.item}>
    <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default function Menu(){
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={styles.container}>

      <Text style={styles.space}>
          MENU
      </Text>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    flex:1,
    backgroundColor: '#D2D3D3',
    justifyContent: 'center',
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
  },

  container: {
    flex:3,
    backgroundColor: '#D2D3D3',
    justifyContent: 'center',

  },
 
  item: {
    backgroundColor: '#fff',
    marginVertical: 20,
    marginHorizontal: 13,
    borderRadius: 5,
    height: 170,
    width: 170,
    justifyContent: "space-around",
    
  },
  title: {
   fontSize: 17,
   textAlign: "center",
   fontWeight: "bold",

},
});
