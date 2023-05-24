import React, { Component } from 'react'  
import {StyleSheet,View, Text, TouchableOpacity} from 'react-native' 
import AntDesign from 'react-native-vector-icons/AntDesign'
import FlatListPicker from 'react-native-flatlist-picker'; 
const dataPicker = [
    { value: 'C', key: 'key1' },
    { value: 'C++', key: 'key2' },
    { value: 'DS', key: 'key3' },
    { value: 'JAVA', key: 'key4' }
  ] 
export default class PickarExample extends Component {  
    constructor(props) {
        super(props);
      }
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
              <TouchableOpacity onPress={() => {
          this.FlatListPicker.showPickerList()
          // this.FlatListPicker.hidePickerList()
        }}
        >
             <Text style={{ textDecorationLine: 'underline' }}> Press To Show FlatListPicker</Text>
        </TouchableOpacity>
        <FlatListPicker 
         ref={ref => { this.FlatListPicker = ref }}
          data={dataPicker}
          containerStyle={styles.container}
          dropdownStyle={{ width: 180 }}
          dropdownTextStyle={{ fontSize: 15 }}
          pickedTextStyle={{ color: 'black', fontWeight: 'bold' }}
          animated="slide"
          defaultValue="Select Course...."
          renderDropdownIcon={() => (<AntDesign name="caretdown" color="blue" size={15} style={{ padding: 15 }} />)}
          onValueChange={(value, index) => alert(`Selected ${value}`)}
        />
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#CECECE',
      width: 250,
      height: 50,
      alignSelf: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 30,
      padding: 5,
    }
  });
   