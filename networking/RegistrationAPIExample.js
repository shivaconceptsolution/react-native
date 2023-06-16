import React, {useState} from 'react';
import {StyleSheet,Text,Button,TextInput, View} from 'react-native';

const RegistrationAPIExample=()=>{
   const[a,setA] = useState(undefined)
   const[userId,setUserId]=useState(undefined)
   const[id,setId]=useState(undefined)
   const[title,setTitle]=useState(undefined)
   const[body,setBody]=useState(undefined)
   const[statename,setStateName]=useState(undefined)
   const[cityname,setCityName]=useState(undefined)
   const postExample= async()=>{
        try
        {
            await fetch("https://shivaconceptdigital.com/api/regmobile.php", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
             },
            body: JSON.stringify({
               email:userId,
               pwd:id,
               mobileno:title,
               fullname:body,
               statename:statename,
               cityname:cityname
            }),
          }).then((response) =>  response.json()).then((responseData) => {
              setA(JSON.stringify(responseData.msg))  
              console.log(JSON.stringify(responseData.msg));
            })
            .done();
        }
        catch(error)
        {
            console.error(error)
        }
    }
    function addTogether() {
       postExample()
    }

    return( <View style={styles.container}>
        <TextInput
        placeholder="Enter email"
        style={{height: 50,width:150,backgroundColor: 'azure', fontSize: 20}}  
        onChangeText={v => {
                setUserId(v); // Use parsed value from onChangeText
            }}
        />
        <TextInput
        placeholder="Enter password"
        style={{height: 40,width:150,backgroundColor: 'azure', fontSize: 20}}  
        onChangeText={e => {
                setId(e); // or get correct value from nativeEvent onChange
            }}
        />
       <TextInput
       placeholder="Enter mobileno"
       style={{height: 40,width:150,backgroundColor: 'azure', fontSize: 20}}  
       onChangeText={e => {
                setTitle(e); // or get correct value from nativeEvent onChange
            }}
        />
        <TextInput
            placeholder="Enter fullname"
            style={{height: 40,width:150,backgroundColor: 'azure', fontSize: 20}}  
            onChangeText={e => {
                setBody(e); // or get correct value from nativeEvent onChange
            }}
        />
         <TextInput
            placeholder="Enter statename"
            style={{height: 40,width:150,backgroundColor: 'azure', fontSize: 20}}  
            onChangeText={e => {
                setStateName(e); // or get correct value from nativeEvent onChange
            }}
        />
         <TextInput
          placeholder="Enter cityname"
          style={{height: 40,width:150,backgroundColor: 'azure', fontSize: 20}}  
          onChangeText={e => {
                setCityName(e); // or get correct value from nativeEvent onChange
            }}
        />
        <Button onPress={addTogether} title="POST" />
        <Text>{a}</Text>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    
});
export default RegistrationAPIExample;