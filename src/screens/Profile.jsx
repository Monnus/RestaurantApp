import React,{useState}from 'react';
import { View, Text , StyleSheet,Image,TextInput , SafeAreaView} from 'react-native';
import{getFirestore,collection,addDoc} from "firebase/firestore"
import app from '../../firebaseConfig';
import Headerv2 from '../components/headerv2/Headerv2';
import Menu from '../components/manu/menue';
import { Button } from 'react-native-paper';
export default function Profile() {
    const [showMenu,setShowMenu]=useState(false);

    return (
        <SafeAreaView style={{flex:1,justifyContent:"center"}}>
        <Headerv2 showMenu={showMenu} setShowMenu={setShowMenu}/>

        <View style={{height:"500px",backgroundColor:"lightgray"}}>
        <Text style={styles.textInput}>Prefered Name: 
        <TextInput placeholder='User'
        style={{height:30, borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px"}}/>           
        </Text>
       
        <Text style={styles.textInput} >Prefered Name: 
        <TextInput placeholder='User' 
        style={{height:30, borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px"}}/>           
        </Text>
 </View>
          
 {showMenu?<Menu setShowMenu={setShowMenu} showMenu={showMenu} navigation={navigation }/>:<></>}  
    
<Button mode="contained" color="#2D3E48" style={{marginLeft:"60px",marginBottom:"30px",width:"200px",height:"40px"}}>
    <Text style={{fontSize:15}}>
    Update
    </Text>
    </Button>
     </SafeAreaView>
  );
}

const styles=StyleSheet.create({
    container:{
      flex:5,
      height:100,
        backgroundColor:"lightgray",
        flexDirection:"row",
        justifyContent:"center",

    },
    img:{
        height:100,
        width:100,
    },
    textInput:{
        fontSize:"15px",
        fontWeight:"large",
    }
})
