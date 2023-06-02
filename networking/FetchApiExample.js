import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
const FetchApiExample=()=>{

    const[isLoading,setLoading]=useState(true)
    const[data,setData] = useState([])
    const[title,setTitle] = useState(undefined)
    const[desc,setDesc] = useState(undefined)
    const getMovies =async()=>{
       try{
        const response = await fetch("https://reactnative.dev/movies.json");
        const json = await response.json();
        setData(json.movies);
        setTitle(json.title)
        setDesc(json.description)

       }
       catch(error)
       {
         console.error(error)
       }
       finally
       {
        setLoading(false)
       }
    }
    useEffect(()=>getMovies(),[]);
    return(<View  style={{flex: 1}}>
{isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        /> )}
          <Text style={{marginBottom:10}}>Title is {title}</Text>
          <Text style={{marginBottom:10}}>description is {desc}</Text>
    </View>)
}
export default FetchApiExample;