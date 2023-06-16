import React, {useState} from 'react';
import {StyleSheet,Text,Button,TextInput, View} from 'react-native';

const LoginAPIExample=()=>{
   const[a,setA] = useState(undefined)
   const[userId,setUserId]=useState(undefined)
   const[id,setId]=useState(undefined)
   
   const postExample= async()=>{
        try
        {
            await fetch("https://shivaconceptdigital.com/api/loginmobile.php", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
             },
            body: JSON.stringify({
               email:userId,
               pwd:id,
             
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
export default LoginAPIExample;