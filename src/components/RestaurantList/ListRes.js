import { nanoid } from 'nanoid';
import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';

export default function ListRes({arrayOFres,data=[{img:require("../../Image/icon.png"),id:nanoid(),
title:"burger Dish",description:`ullamco laboris nisi ut aliquip ex 
ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur`}]}) {
  return (
    <View style={styles.container}>
<Text style={styles.heading}>Restaurants near you:</Text>

            {arrayOFres.map(items=>{
                console.log(items);
                return(
                    <View style={styles.boxRes} key={nanoid()}>
        <Image source={{uri:items.RESTUARANT_IMG}} style={{height:"7rem",width:"7rem"}}/>
        <View style={{display:"flex"}}>
        <Text style={{width:"10rem",height:"auto" ,color:"white"}}>{items.NAME_OF_RES}</Text>
        <Text style={{width:"",height:"auto" ,color:"white"}}>{items.DESCRIPTION}</Text>
        <Text style={{color:"white"}}>OPEN:{items.OPEN}</Text>
        </View>
        </View>
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
            height:130,
            width:"100%",  
            marginBottom:"15px"        
        }
    
})
