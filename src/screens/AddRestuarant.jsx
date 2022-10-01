import React,{useState}from 'react';
import { View, Text, StyleSheet ,SafeAreaView, TextInput,Image} from 'react-native';
import Headerv2 from '../components/headerv2/Headerv2';
import Menu from '../components/manu/menue';
import{getFirestore,collection,addDoc,getDocs,doc, updateDoc, where, query} from "firebase/firestore";
import {getAuth, onAuthStateChanged,updateProfile,signOut} from "firebase/auth";
import Elevations from 'react-native-elevation';
import app from '../../firebaseConfig';
import * as ImagePicker from "expo-image-picker";
import {Button} from "react-native-paper";
import { async } from '@firebase/util';
export default function AddRestaurant({navigation}) {
  const [showMenu,setShowMenu]=useState(false);
  const [image,setImage]=useState(null);
  const [imageRest,setImageRest]=useState(null);
  const [aboutRes,setAboutRes]=useState("");
  const [name,setName]=useState("");
  const [province,setProvince]=useState("");
  const [city,setCity]=useState("");
  const [mssgToCMS,setMssgToCMS]=useState("");
  const db= getFirestore(app);
 const auth=getAuth(app);
const user= auth.currentUser;
console.log(user);
const handleSumbmit=async({name,province,city,mssgToCMS,aboutRes,imageRest})=>{
try{
  const docRef=await addDoc(collection(db,"messages"),{
    NAME_OF_RESTUARANT:name,
    PROVINCE:province,
    CITY:city,
    MESSAHE_TO_CMS:mssgToCMS,
    DISCRIPTION:aboutRes,
    IMAGE_OF_RESTUARANT:imageRest,
    UID:user.uid
  });

  console.log("documment written with ID",docRef.id);
}catch(err){
console.log(err);
}
}
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

 const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImageRest(result.uri);
  }
};
  return (
    <SafeAreaView style={styles.container}>
     <Headerv2 showMenu={showMenu} setShowMenu={setShowMenu} navigation={navigation}/>
    

<View style={styles.inputContainer}>
<TextInput placeholder='About your restaurant' multiline={true} textAlignVertical="top" value={aboutRes} onChange={(e)=>setAboutRes(e.target.value)}
   style={{paddingLeft:"10px",height:100,marginBottom:"20px",fontWeight:"400",fontSize:"20px", borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px",...Elevations[2]}}/>           
           {imageRest &&
        <Image source={{uri:imageRest}} style={{width:"150px",height:"100px",...Elevations[4]}}/>
           }
            <Button color="#2D3E48" mode="contained" style={{width:100,marginLeft:"20px",marginBottom:"5px",height:35,...Elevations[2]}} onPress={pickImage}>
              <Text>Upload</Text></Button>
<TextInput placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}
   style={{paddingLeft:"10px",height:40,marginBottom:"20px",fontWeight:"400",fontSize:"20px", borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px",...Elevations[2]}}/>           
<TextInput placeholder='Province' value={province} onChange={(e)=>setProvince(e.target.value)}
   style={{paddingLeft:"10px",height:40,marginBottom:"20px",fontWeight:"400",fontSize:"20px", borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px",...Elevations[2]}}/>           
<TextInput placeholder='City' multiline={true} value={city} onChange={(e)=>setCity(e.target.value)}
   style={{paddingLeft:"10px",height:40,marginBottom:"20px",fontWeight:"400",fontSize:"20px", borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px",...Elevations[2]}}/>           
<TextInput placeholder='Message to CMS...' multiline={true} textAlignVertical="top" value={mssgToCMS} onChange={(e)=>setMssgToCMS(e.target.value)}
   style={{paddingLeft:"10px",height:100, borderLeftWidth:"2px",fontWeight:"400",fontSize:"20px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px"}}/>           
</View>
<Button mode="contained" color="#20A4DD" 
onPress={()=>handleSumbmit({name,province,city,mssgToCMS,aboutRes,imageRest})}
 style={{marginLeft:"60px",marginBottom:"30px",width:"200px",height:"40px",...Elevations[2]}}>
    <Text style={{fontSize:15,color:"white"}}>
    Send
    </Text>
    </Button>
 {showMenu?<Menu setShowMenu={setShowMenu} showMenu={showMenu} navigation={navigation } image={image}/>:<></>}      

     </SafeAreaView>
  );
}
const styles = StyleSheet.create({
container:{
  display:"flex",
  flex:1,
  justifyContent:"center"
},
inputContainer:{
  display:"flex",
  
flex:5,

}

}) 