import { Component } from "react";
import { View,Text } from "react-native";
import ChildComponent from "./Childcomponent";
export default class ParentComponent extends Component
{
    render()
    {
        return(
            <View>
             <ChildComponent name="Ram" mobile="9812333333" />
             <ChildComponent name="Jay Kumar" />
            </View>
        )
    }
}