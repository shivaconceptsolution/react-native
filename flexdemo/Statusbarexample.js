import React, { Component } from 'react'  
import { View,StyleSheet,StatusBar} from 'react-native' 
export default class Statusbarexample extends Component
{
    render(){
        return(<View>
            <StatusBar 
            backgroundColor = "#b3e6ff"  
            barStyle = "light-content"   
            hidden = {false}    
            translucent = {true}  
            
            />
            </View>)
    }
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  