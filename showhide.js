import React, { useState } from 'react';
import { View, Button } from 'react-native';

const showhide = () => {
  const [visibleDiv, setVisibleDiv] = useState('');

  const toggleDiv = (divName) => {
    setVisibleDiv(visibleDiv === divName ? '' : divName);
  };

  return (
    <View>
      <Button title={visibleDiv === 'div1' ? 'Hide Div 1' : 'Show Div 1'} onPress={() => toggleDiv('div1')} />
      {visibleDiv === 'div1' && <View style={{ backgroundColor: 'red', height: 100 }} />}
      
      <Button title={visibleDiv === 'div2' ? 'Hide Div 2' : 'Show Div 2'} onPress={() => toggleDiv('div2')} />
      {visibleDiv === 'div2' && <View style={{ backgroundColor: 'green', height: 100 }} />}
    </View>
  );
};

export default showhide;