import { Component } from "react"
import {View,StyleSheet,FlatList,Text,Alert} from "react-native"
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  
class ListViewExample extends Component {
    constructor()
    {
        super()
        this.state={dataSource:[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
    }
    getItem  = (e) => {  
      if(e=='Devin')
      {
      Alert.alert('9812345678');
      } 
      else if(e=='Dan')
      {
      Alert.alert('9815345678');
      }  
  } 
    render(){

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text onPress={(e)=>this.getItem(item.key)} style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
        }
  };
  
  export default ListViewExample;