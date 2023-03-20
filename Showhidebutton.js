import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const Showhidebutton = () => {
  const [data, setData] = useState('');

  const changeCourse = (course) => {
    setData(course)
  };

  return (
    <View>
      <Button title="JAVA" onPress={() => changeCourse('java')}  />
      <Button title="PYTHON" onPress={() => changeCourse('python')} />
      <Button title="PHP" onPress={() => changeCourse('php')} />
      <Button title="REACT" onPress={() => changeCourse('react')} />
       <View style={{ backgroundColor: 'red', height: 100 }} >
          <Text>{data}</Text>
        </View>
      
      
     
    </View>
  );
};

export default Showhidebutton;