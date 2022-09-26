import React,{useState,useEffect}from 'react';
import { View, Text , StyleSheet,Image,TextInput ,Platform,SafeAreaView} from 'react-native';
import{getFirestore,collection,addDoc,getDocs,doc, updateDoc, where, query} from "firebase/firestore";
import {getAuth, onAuthStateChanged,updateProfile,signOut} from "firebase/auth";
import * as ImagePicker from "expo-image-picker";
import app from '../../firebaseConfig';
import Headerv2 from '../components/headerv2/Headerv2';
import Menu from '../components/manu/menue';
import { Button } from 'react-native-paper';
import Elevations from 'react-native-elevation';
import ComProfileIMG from '../components/ProfileImage/profileIMG';


export default function Profile({navigation}) {
 
    const [image,setImage]=useState(null)
    const [userId,setUserID]=useState("")
    const [showMenu,setShowMenu]=useState(false);
    const [preferedName,setPreferedName]=useState("");
    const [addNumber,setaddNumber]=useState("");
    const [otherEmail,setOtherEmail]=useState("");
 const auth=getAuth(app);


    const db= getFirestore(app);
    const getFirebaseData=()=>{
        onAuthStateChanged(auth,async(user)=>{
            if(user){
                console.log(user,"user Signed In");
                
                const q =query(collection(db,"users"), where("uid","==",user.uid))
                const querySnapshot=await getDocs(q);
              querySnapshot.forEach((doc) => {
   
                  // doc.data() is never undefined for query doc snapshots
                  setImage(doc.data().profileImage)
                  console.log(doc.id, " => ", doc.data().profileImage);
                });
           }
           return;
        })
   }
   getFirebaseData()
 
// get user profile image

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
      setImage(result.uri);
    }
  };

///update user profile function
    const handleUpdate=async(preferedName,addNumber,otherEmail)=>{
        try {
  const user=auth.currentUser;
            const docRe2=doc(db,"users","0VIqBWynmNHZXeq0Exr9")
            updateProfile(auth.currentUser,{
                displayName:preferedName,photoURL:image
            })
            const docRef= updateDoc(docRe2,{
            signInEmail:user.email,
            uid:user.uid,
            displayName:preferedName,
            mobileNumber:addNumber,
            ExtNumber:otherEmail,
            profileImage:image,
            })
            const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });

            console.log("document written with ID:",docRef.id);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SafeAreaView style={{flex:1,justifyContent:"center"}}>
        <Headerv2 showMenu={showMenu} setShowMenu={setShowMenu} navigation={navigation}/>
            <View style={styles.container}>
              <ComProfileIMG getFirebaseData={getFirebaseData} image={image}/>
            <Button color="#2D3E48" mode="contained" style={{width:100,height:35,...Elevations[2]}} onPress={pickImage}><Text>Upload</Text></Button>
    <Text style={styles.txtInput}>Prefered Name: 
        <TextInput placeholder='User'
            value={preferedName} onChange={(e)=>setPreferedName(e.target.value)}
            style={{paddingLeft:"10px",height:30, borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px"}}/> 
            </Text>
       <Text style={styles.txtInput}>Phone Number: 
        <TextInput placeholder='Number' value={addNumber}
                onChange={(e)=>setaddNumber(e.target.value)} style={{paddingLeft:"10px",height:30, borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px"}}/>           

</Text>
<Text style={styles.txtInput}>Other Email: 
 <TextInput placeholder='input' value={otherEmail}
 onChange={(e)=>setOtherEmail(e.target.value)} style={{paddingLeft:"10px",height:30, borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px"}}/>           
</Text>
    </View>
 {showMenu?<Menu setShowMenu={setShowMenu} showMenu={showMenu} navigation={navigation } image={image}/>:<></>}      
<Button mode="contained" color="#2D3E48" 
onPress={()=>handleUpdate(preferedName,addNumber,otherEmail)}
 style={{marginLeft:"60px",marginBottom:"30px",width:"200px",height:"40px",...Elevations[2]}}>
    <Text style={{fontSize:15}}>
    Update
    </Text>
    </Button>
    
     </SafeAreaView>
  );
}

const styles=StyleSheet.create({
    container:{
        paddingTop:"5px",
paddingLeft:"10px",
      height:500,
        backgroundColor:"lightgray",
    },
    img:{
        height:100,
        width:100,
    },
    txtInput:{
fontSize:18,
fontWeight:"bold",
marginBottom:"10px"
    }
})
