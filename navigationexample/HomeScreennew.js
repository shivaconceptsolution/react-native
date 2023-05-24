import {View,Text,Button} from "react-native"
const HomeScreennew= ({navigation})=>{
    return(<View>
         <Text>Welcome in Home Screen</Text>
         <Button
         title="profile"
         onPress={() =>
        navigation.navigate('Profilenew', {name: 'Jane'})
       }
    />
     <Button
         title="Contact"
         onPress={() =>
        navigation.navigate('Contactnew',{name: 'welcome in contact us page'})
       }
    />
    
    </View>)
}
export default HomeScreennew;