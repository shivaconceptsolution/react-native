import { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class Flexheightwidth extends Component
{
    render()
    {
        return(
            <View style={styles.Container}>
                <View style={styles.A} />
                <View style={styles.B} />
                <View style={styles.C} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container:{  
        flex:1  
      },
    A:{
        flex:1,backgroundColor: 'blue'  
    },
    B:{
        flex:2, backgroundColor: 'cyan'  
    },
    C:{
        flex:3,backgroundColor: 'yellow'  
    }
})