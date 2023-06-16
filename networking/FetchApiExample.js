import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {ActivityIndicator, FlatList, Text, Image, View} from 'react-native';
const FetchApiExample=()=>{

    const[isLoading,setLoading]=useState(true)
    const[data,setData] = useState([])
  
    const getMovies =async()=>{
       try{
        const response = await fetch("https://shivaconceptdigital.com/api/viewallcourse.php");
        const json = await response.json();
        setData(json.result);
        

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
            <View>
               <Image source={{uri: `https://shivaconceptdigital.com/${item.path}`}} style={{width:50,height:50,}} />
               <Video  
            source={{uri: `https://shivaconceptdigital.com/scsjava/JavaFirstSession.mp4`}}                  // the video file
            paused={false}                  // make it start    
            style={{width:50,height:50,}}  // any style you want
            repeat={true}                   // make it a loop
        />
          
            </View>
          )}
        /> )}
         
    </View>)
}
export default FetchApiExample;