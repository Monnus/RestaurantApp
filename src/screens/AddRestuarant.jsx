import React,{useState}from 'react';
import { View, Text, StyleSheet ,SafeAreaView, TextInput, Button} from 'react-native';
import Headerv2 from '../components/headerv2/Headerv2';
import Menu from '../components/manu/menue';
import{getFirestore,collection,addDoc,getDocs,doc, updateDoc, where, query} from "firebase/firestore";
import {getAuth, onAuthStateChanged,updateProfile,signOut} from "firebase/auth";
import elevations from 'react-native-elevation';
import app from '../../firebaseConfig';

export default function AddRestaurant({navigation}) {
  const [showMenu,setShowMenu]=useState(false);
  const [image,setImage]=useState(null);
  const db= getFirestore(app);
 const auth=getAuth(app);

  const getFirebaseData=()=>{
      onAuthStateChanged(auth,async(user)=>{
          if(user){
      
              
              const q =query(collection(db,"users"), where("uid","==",user.uid))
              const querySnapshot=await getDocs(q);
            querySnapshot.forEach((doc) => {
 
                // doc.data() is never undefined for query doc snapshots
                setImage(doc.data().profileImage)
               
              });
         }
         return;
      })
 }
 getFirebaseData()

  return (
    <SafeAreaView style={styles.container}>
     <Headerv2 showMenu={showMenu} setShowMenu={setShowMenu} navigation={navigation}/>
<View style={styles.inputContainer}>


</View>
     
 {showMenu?<Menu setShowMenu={setShowMenu} showMenu={showMenu} navigation={navigation } image={image}/>:<></>}      

     </SafeAreaView>
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:"center"
},
inputContainer:{
flex:1,
backgroundColor:"lightgray"
}
}) 