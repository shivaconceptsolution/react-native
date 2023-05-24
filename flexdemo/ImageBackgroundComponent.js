import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const ImageBackgroundComponent=()=>
{
    const image = {uri: 'https://www.shivaconceptsolution.com/image/logo1.png'};
    return(<View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image} >
            <Text style={styles.text}>Hello World</Text>
        </ImageBackground>
    </View>)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
  });

  export default ImageBackgroundComponent;