import React,{useState} from 'react';
import { View, Text, StyleSheet,TextInput ,TouchableOpacity,Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import "../components/slider/Slider";
import { getAuth, signOut } from 'firebase/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header({navigation,setShowMenu,showMenu}) {
  const auth=getAuth()
  /// sign out current user
  on
  const handleUserSignout=()=>{
    signOut(auth)

        navigation.navigate("signIn")
    }
return (
    <View style={styles.headerContainer}>
 
        <View style={styles.search}>
 <TextInput style={styles.searchbar} placeholder="search restaurants"/>
 <FontAwesome name="search" size={47} color="black"  style={{backgroundColor:"rgb(255,255,255)",height:"100%",
 borderTopStartRadius:"20px", borderBottomStartRadius:"30px",alignSelf:"center",marginLeft:"30px"}}/>
        </View>
   <View style={styles.navsection}>
    
      <TouchableOpacity style={{ height:"30px",width:"10px"}} onPress={()=>setShowMenu(!showMenu)}>
      <Ionicons name="menu" size={54} color="black"  />
        </TouchableOpacity>
        <Image source={{uri:require("../Image/icon.png")}} style={{resizeMode:"contain",width:110,height:70,backgroundColor:"#F5F5F5"}}/>
  <MaterialCommunityIcons name="logout" size={50} color="black" onPress={()=>handleUserSignout()}/>

   </View>
   <View style={styles.tabs}>

<Text style={{   fontWeight:500, fontSize:"20px"}}>History</Text>
<Text style={{   fontWeight:500, fontSize:"20px"}}>All Restaurants</Text>
<Text style={{  fontWeight:500,  fontSize:"20px"}}>Types</Text>

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
justifyContent:"space-between",
alignItems:"center",
// backgroundColor:"black",

backgroundColor:"#F5F5F5",
},
tabs:{
    flex:2,
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"flex-end",
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

