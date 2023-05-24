import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const TextExample = () => {
 

 

  return (
    <Text numberOfLines={1} ellipsizeMode='tail'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextExample;