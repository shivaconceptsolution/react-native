import { Component } from "react";
import { View,Text } from "react-native";

export default class ChildComponent extends Component
{
    render()
    {
        return(
            <View>
                <Text> {this.props.name}, {this.props.mobile}</Text>
               
            </View>
        )
    }
}