import React from 'react'
import {StyleSheet, Text , View,Button} from 'react-native'

function List({task , id , status , statusToggler}) {
 
    const {list , button} = styles
    return (
         <View style={list}>
           <Text>{task}</Text>
           <Button 
            color={status?"green":"#47597e"}  
            onPress={()=>statusToggler(id)} 
            title={status?"Complete":"Incomplete"} 
            />
         </View>
    )
}

export default List

const styles = StyleSheet.create({
    list :{
        backgroundColor:"#e1e8eb",
        margin : 10,
        padding : 10,

        flex : 2,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
      
    },
    button:{
        fontSize : 20 
    }
})
