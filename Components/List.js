import React from 'react'
import {StyleSheet, Text , View,Button} from 'react-native'

function List({task , id , status , statusToggler ,taskRemoveHandler}) {
 
    const {list ,fontStyle, button} = styles
    return (
         <View style={list}>
           <Text style={fontStyle}>{task}</Text>
           <Button 
            color={status?"green":"#47597e"}  
            onPress={()=>statusToggler(id)} 
            title={status?"Complete":"Incomplete"} 
            />
            <Button
            onPress={()=>taskRemoveHandler(id)}
            title="Delete"
            />
         </View>
    )
}

export default List

const styles = StyleSheet.create({
    list :{
        backgroundColor:"#e1e8eb",
        marginVertical : 15,
        marginHorizontal : 5,
        padding : 10,

        flex : 3,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
      
    },
      fontStyle:{
	  textTransform :"capitalize"
    },
    button:{
        fontSize : 20, 
        flex : 1
    }
})
