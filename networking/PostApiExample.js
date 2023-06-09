import React, {useState} from 'react';
import {StyleSheet,Text,Button,TextInput, View} from 'react-native';

const PostApiExample=()=>{
   const[a,setA] = useState(undefined)
   const[userId,setUserId]=useState(undefined)
   const[id,setId]=useState(undefined)
   const[title,setTitle]=useState(undefined)
   const[body,setBody]=useState(undefined)
   const postExample= async()=>{
        try
        {
            await fetch("https://gorest.co.in/public/v2/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Authorization": `Bearer 902d19ec95276f806b79c2a34c72298f589b119b96dffc3f3b15effb1a604c49`
            },
            body: JSON.stringify({
               id: id,
               name:userId,
              email:title,
              gender:body,
              status:"active"
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
           
          
            
            style={{height: 50,width:150,backgroundColor: 'azure', fontSize: 20}}  
            onChangeText={v => {
                setUserId(v); // Use parsed value from onChangeText
            }}
        />
        <TextInput
           
           
            
            style={{height: 40,width:150,backgroundColor: 'azure', fontSize: 20}}  
            onChangeText={e => {
                setId(e); // or get correct value from nativeEvent onChange
            }}
        />
       <TextInput
            
            placeholder="Enter title"
            
            style={{height: 40,width:150,backgroundColor: 'azure', fontSize: 20}}  
            onChangeText={e => {
                setTitle(e); // or get correct value from nativeEvent onChange
            }}
        />
        <TextInput
            
            placeholder="Enter body"
            
            style={{height: 40,width:150,backgroundColor: 'azure', fontSize: 20}}  
            onChangeText={e => {
                setBody(e); // or get correct value from nativeEvent onChange
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
export default PostApiExample;