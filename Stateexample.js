import { Component } from "react";
import { View,Text, Button, TextInput} from "react-native";
export default class Stateexample extends Component
{
    state = {key:"",num1:0,num2:0}  //state declaration
  
    changeState=()=>
    {
        this.setState({key:(parseInt(this.state.num1) + parseInt(this.state.num2))})
    }
    render()
    {
        return(
        <View>
            <TextInput type="number" placeholder="Enter First Number" onChangeText={v=>{this.setState({num1:v})}} />
            <TextInput type="number" placeholder="Enter Second Number" onChangeText={v=>{this.setState({num2:v})}} />
           <Button title="click" onPress={this.changeState} />
           <Text>{this.state.key}</Text>
        </View>)
    }
}