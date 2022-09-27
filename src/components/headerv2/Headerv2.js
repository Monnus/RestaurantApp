import React,{useEffect} from 'react';
import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Menu from '../manu/menue';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Elevation from "react-native-elevation"
import { getAuth, onIdTokenChanged, signOut } from 'firebase/auth';
import app from '../../../firebaseConfig';

export default function Headerv2({showMenu,setShowMenu,navigation}) {
    const auth=getAuth(app)
    /// sign out current user
    const handleUserSignout=()=>{
      signOut(auth)

          navigation.navigate("signIn")
      }
  return (
    <View style={styles.container}>
<TouchableOpacity style={{ height:"30px",width:"10px"}} onPress={()=>setShowMenu(!showMenu)}>
      <Ionicons name="menu" size={54} color="black"  />
        </TouchableOpacity>
  <Image source={{uri:require("../../Image/icon.png")}} style={{resizeMode:"contain",width:110,height:70,backgroundColor:"#F5F5F5"}}/>
  <MaterialCommunityIcons name="logout" size={50} color="black" onPress={()=>handleUserSignout()}/>
     </View>
  );
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        marginTop:"10px",
        marginBottom:"10px",
        
    }
})
