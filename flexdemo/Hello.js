import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Hello = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
     <Text style={styles.welcome}>Hello World</Text>
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
export default Hello;