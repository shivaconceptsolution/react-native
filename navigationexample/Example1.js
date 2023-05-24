const { NavigationContainer } = require("@react-navigation/native")
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View,Text,Button} from "react-native"
const Stack = createNativeStackNavigator();

const Example1= ()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
            />
             <Stack.Screen name="Profile" component={Profile} />
           
        </Stack.Navigator>
    </NavigationContainer>)
}
const HomeScreen= ({navigation})=>{
    return(<View>
         <Text>Welcome in Home Screen</Text>
         <Button
         title="Go to Jane's profile"
         onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
       }
    />
    </View>)
}
const Profile= ({navigation, route})=>{
    return(<View>
         <Text>Welcome in Profile Screen {route.params.name}</Text>
    </View>)
}

export default Example1;