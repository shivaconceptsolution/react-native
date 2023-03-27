import { Component } from "react"
import {View,StyleSheet,FlatList,Text,Alert} from "react-native"
const student=[
    {rno:1001,name:'stu1'},
    {rno:1002,name:'stu2'},
    {rno:1003,name:'stu3'}
   ]
const Item = ({title}) => (
    <View style={styles.item}>
      <Text onPress={(e)=>this.getListViewItem(title)} style={styles.title}>{title}</Text>
    </View>
  );
  getListViewItem  = (e) => {  
    Alert.alert(e);  
}  
export default class FlatlistExample extends Component
{
   
    render()
    {
   
    return(
    <View style={styles.container}>
        <FlatList
        data={student}
        renderItem={({item}) => <Item title={item.name} />}
        keyExtractor={item => item.rno}
      />
    </View>)
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
     
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });