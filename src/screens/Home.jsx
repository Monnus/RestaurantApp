import React,{useState,useEffect} from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import Header from '../components/header';
import Menu from '../components/manu/menue';
import ListRes from '../components/RestaurantList/ListRes';
import SliderImage from '../components/slider/Slider';
import{getFirestore,collection,addDoc,getDocs,doc, updateDoc, where, query} from "firebase/firestore";
import {getAuth, onAuthStateChanged,updateProfile,signOut} from "firebase/auth";
import app from '../../firebaseConfig';
import { useFocusEffect } from '@react-navigation/native';




  
  export default function HomeScreen({navigation }) {
    const [image,setImage]=useState(null)
    const [showMenu,setShowMenu]=useState(false);
    const [DocFromFire,setDocFromFire]=useState(null)
  const db=getFirestore(app);
  const auth=getAuth(app);
  const [arrayOFres,setArrayOfRes]=useState([])
  
useFocusEffect(()=>{
  
})
  
  const gettingDocs=async()=>{
    const docRef=doc(db,"resturantDetiail");
    try{
      const docSnap=await getDoc(docRef);
      if(docSnap.exists()){
        setDocFromFire(dataSnap.data())
        console.log("Document data:",docSnap.data());
      }else{
        console.log("No succh document!");
      }
    }catch(err){
      console.log(err);
    }
  };
  useEffect(()=>{
    async function getFirebaseData(){
      try {
    const db= getFirestore();
    const arrfrom=[];
    const querySnapshot =await getDocs(collection(db, "resturantappdetails"));
    querySnapshot .forEach((doc)=>{
      arrfrom.push(doc.data());
    });
    setArrayOfRes(arrfrom);
  } catch (error) {
    console.log(error);
  }
  };
  getFirebaseData();
  
  },[]);
  console.log(arrayOFres);
  const getFirebaseData=()=>{
    onAuthStateChanged(auth,async(user)=>{
          if(user){
              console.log(user,"user Signed In");
              
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
        
        getFirebaseData();
  gettingDocs();
  return (
    <SafeAreaView>
   <Header navigation={navigation } setShowMenu={setShowMenu} showMenu={showMenu}/> 
   <SliderImage/>
   <ListRes arrayOFres={arrayOFres}/>
   {showMenu?<Menu setShowMenu={setShowMenu} showMenu={showMenu} navigation={navigation } image={image}/>:<></>}  
         </SafeAreaView>
  );
}
