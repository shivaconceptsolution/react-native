const { NavigationContainer } = require("@react-navigation/native")
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View,Text,Button} from "react-native"
import Profilenew from './Profilenew';
import Contactnew from './Contactnew';
import HomeScreennew from './HomeScreennew';
const Stack = createNativeStackNavigator();

const Example2= ()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={HomeScreennew}
            options={{title: 'Welcome'}}
            />
             <Stack.Screen name="Profilenew" component={Profilenew} />
             <Stack.Screen name="Contactnew" component={Contactnew} />
             
           
        </Stack.Navigator>
    </NavigationContainer>)
}


export default Example2;