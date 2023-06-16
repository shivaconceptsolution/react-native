const { Animated } = require("react-native");

import { useEffect,useRef } from 'react';
import {StyleSheet,Text,View} from 'react-native'
const AnimationExample = (props)=>{
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: true,
        }).start();
      }, [fadeAnim]);

      return(
      <Animated.View style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
       {props.children}
      </Animated.View>)
}

const Testanim = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AnimationExample
          style={{
            width: 250,
            height: 50,
            backgroundColor: 'powderblue',
          }}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
            Fading in
          </Text>
        </AnimationExample>
      </View>
    );
  };

  export default Testanim;