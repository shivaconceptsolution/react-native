import { Component } from "react";
import { View,Text, Button, TextInput} from "react-native";
export default class Prime extends Component
{
    state = {key:"",num1:0}  //state declaration
    
    changeState=()=>
    {
        out = ""
       const data = this.state.num1;
       var i=0;
       for(i=2;i<data;i++)
       {
        if(data%i==0)
        {
            out = "not prime";
            break
        }
       }
       if(data==i)
       {
        out = "prime"
       }
       this.setState({'key':out})
    }
    render()
    {
        return(
        <View>
            <TextInput type="number" placeholder="Enter First Number" onChangeText={v=>{this.setState({num1:v})}} />
          
           <Button title="click" onPress={this.changeState} />
           <Text>{this.state.key}</Text>
        </View>)
    }
}