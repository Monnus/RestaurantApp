import React,{useState} from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import Header from '../components/header';
import Menu from '../components/manu/menue';
import ListRes from '../components/RestaurantList/ListRes';
import SliderImage from '../components/slider/Slider';
import {getFirestore, collection, query, where, getDocs,doc } from "firebase/firestore";

export default function HomeScreen({navigation }) {
  const [showMenu,setShowMenu]=useState(false);
  const  getFirebaseData=async()=>{
    try {
  const db= getFirestore();
  const q = query(collection(db, "resturantappdetails/"), where("NAME_OF_REST", "==", true));

  
  const querySnapshot =await getDocs(q);
  querySnapshot .forEach((doc)=>{
    console.log(doc.id, " => ", doc.data());
  });
 
} catch (error) {
  console.log(error);
}
};
getFirebaseData();
  return (
    <SafeAreaView>
   <Header navigation={navigation } setShowMenu={setShowMenu} showMenu={showMenu}/> 
   <SliderImage/>
   <ListRes />
   {showMenu?<Menu setShowMenu={setShowMenu} showMenu={showMenu} navigation={navigation }/>:<></>}    
     </SafeAreaView>
  );
}
