import React from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default function Headeer() {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.search}>
 <TextInput style={styles.searchbar} placeholder="search restaurants"/>
 <FontAwesome name="search" size={47} color="black"  style={{backgroundColor:"rgb(255,255,255)",height:"100%",
 borderTopStartRadius:"20px", borderBottomStartRadius:"30px",alignSelf:"center",marginLeft:"30px"}}/>
        </View>
   <View style={styles.navsection}>
   <Ionicons name="menu" size={54} color="black" />
   </View>
   <View style={styles.tabs}>


   </View>
     </View>
  );
}


const styles=StyleSheet.create({
headerContainer:{
 height:200,
 backgroundColor:"#C2BEB3",
},
search:{
    display:"flex",
    flexDirection:"row",
    flex:3,
},
navsection:{
display:"flex",
flexDirection:"row",
height:100,
alignItems:"center",
// backgroundColor:"black",

backgroundColor:"#F5F5F5",
},
tabs:{
    flex:2,
    backgroundColor:"#C2BEB3",
},
searchbar:{
height:"100%",
width:"100%",
outlineStyle: 'none',
paddingLeft:"10px",
color:"gray",
fontSize:"20px",
fontWeight:500,
backgroundColor:"rgba(255,255,255,0.5)",
borderBottomRightRadius:"50px"
}

})

