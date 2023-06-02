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
            await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: userId,
              id: id,
              title:title,
              body:body,
            }),
          }).then((response) =>  response.json()).then((responseData) => {
              setA(JSON.stringify(responseData))  
              console.log(JSON.stringify(responseData));
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