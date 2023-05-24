import {View,Text} from "react-native"
const Contactnew= ({navigation, route})=>{
    return(<View>
         <Text>Welcome in Profile Screen {route.params.name}</Text>
    </View>)
}
export default Contactnew;