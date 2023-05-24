import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text
} from 'react-native';


var data=''
var a=''

const ButtonDemo = () => {
  const[num1,setNum1] = useState("")
  const[num2,setNum2] = useState("")
  const[ope,setOpe] = useState("")
  const[res,setRes] = useState("")
  const[exp,setExp] = useState("")
  const btnone =(e)=>{
     a+=e
     setNum1(a)
     data = data + e
     setExp(data)
  }
  const btntwo =(e)=>{
    a+=e
    setNum1(a)
   data = data + e
   setExp(data)
  }
  const btnOpe =(e)=>{
     setOpe(e)
     data = data + e
     setExp(data)
     setNum2(num1)
     setNum1("")
     a=""
  }
  const btneql =(e)=>{
    data=""
    setExp("")
   if(ope=='+')
   {
    setRes(parseInt(num2) + parseInt(num1))
   }
   else if(ope=='-')
   {
    setRes(parseInt(num2)-parseInt(num1))
    
   }
  }
  const btnclean =()=>{
   a=''
   data=''
   setNum1('')
   setNum2('')
   setRes('')
   setExp('')
 }
  return(
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        {exp}
        {res}
      </Text>
      <Button
        title="1"
        onPress={() => btnone('1')}
      />
       <Button
        title="2"
        onPress={() => btntwo('2')}
      />
      <Button
        title="+"
        onPress={() => btnOpe('+')}
      />
       <Button
        title="-"
        onPress={() => btnOpe('-')}
      />
       <Button
        title="="
        onPress={() => btneql('=')}
      />
       <Button
        title="REF"
        onPress={() => btnclean()}
      />
    </View>
 
 
        
      
  </SafeAreaView>
);
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    marginHorizontal: 1,
  }
});

export default ButtonDemo;