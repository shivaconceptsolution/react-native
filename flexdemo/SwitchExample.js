import React, { useState } from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

const SwitchExample = () => {
    const[isEnabled,setIsEnabled] = useState(false)
    const[data,setData] = useState("")
    const toggleSwitch =()=>{
        setIsEnabled(previousState => !previousState);
        if(isEnabled)
        {
            setData("Switch is ONN")
        }
        else
        {
            setData("Switch is OFF")
        }
    }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
     <Switch  trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled} />
     <Text style={styles.welcome}>{data}</Text>
    </View>
  );
};
const styles = StyleSheet.create({  
    welcome: {  
      fontSize: 20,  
      textAlign: 'center',  
      margin: 10,  
    }  
  });  
export default SwitchExample;