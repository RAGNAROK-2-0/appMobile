import React, {Component} from 'react';
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

export default class AppAPI extends Component{

    constructor(props){
      super(props);
  
      this.state ={
        itens: []
      }
    }

    loadUsers = () => {
        fetch('http://localhost:51397/api/Items')
        .then(res => res.json() )
        .then(res => {
            this.setState ({
                itens: res.results || []
            })
        })
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        return(
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View>
                            <Text>
                                source={{ uri: item.NOME_ITEM }}
                            </Text>
                        </View>
                    )}
                    keyExtractor={item => item.NOME_ITEM}
                    />
            </View>

        )}
}