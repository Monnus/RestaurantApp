import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';

export default function ListRes({data=[{img:require("../../Image/icon.png"),title:"burger Dish",description:`ullamco laboris nisi ut aliquip ex 
ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur`}]}) {
  return (
    <View style={styles.container}>
<Text style={styles.heading}>Restaurants near you:</Text>
    {data.map(data=>{
        return(
            <>
            <View style={styles.boxRes}>
                <Image source={{uri:data.img}} style={{height:"100%",width:"200px"}}/>
                <View style={{display:"flex"}}>
                <Text style={{width:"auto",height:"auto" ,color:"white"}}>{data.title}</Text>
                    <Text style={{width:"auto",height:"auto" ,color:"white"}}>{data.description}</Text>
                </View>
            </View>
            </>
        )
    })}
    </View>
  );
}


const styles=StyleSheet.create({
    
        container:{
            flex:1,
        width:"100%",
        backgroundColor:"lightgray"
        },
        heading:{
            fontSize:20,
            fontWeight:"600",
            height:100,
            width:"300px",
            backgroundColor:"#C2BEB3"
            
        },
        boxRes:{
            display:"flex",
            flexDirection:"row",
            backgroundColor:"#2D3E48",
            height:200,
            width:"100%",          
        }
    
})