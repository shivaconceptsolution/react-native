import { Component } from "react"
import {View,StyleSheet,SectionList,Text} from "react-native"
export default class SectionListExample extends Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <SectionList  
                    sections={[  
                        {title: 'A', data: ['ALTERED','ABBY','ACTION U.S.A.','AMUCK','ANGUISH']},  
                        {title: 'B', data: ['BEST MEN','BEYOND JUSTICE','BLACK GUNN','BLOOD RANCH','BEASTIES']},  
                        {title: 'C', data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE',]},  
                    ]}  
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}  
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}  
                    keyExtractor={(item, index) => index}  
                />  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: "#5ead97"  
    },  
    sectionHeader: {  
        paddingTop: 2,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 2,  
        fontSize: 22,  
        fontWeight: 'bold',  
        color: "#fff",  
        backgroundColor: '#8fb1aa',  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    }  
})  