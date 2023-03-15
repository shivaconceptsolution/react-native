import { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class Heightwidth extends Component
{
    render()
    {
        return(
            <View>
                <View style={styles.A} />
                <View style={styles.B} />
                <View style={styles.C} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    A:{
        width: 400, height: 100, backgroundColor: 'blue'  
    },
    B:{
        width: 400, height: 100, backgroundColor: 'cyan'  
    },
    C:{
        width: 400, height: 300, backgroundColor: 'yellow'  
    }
})