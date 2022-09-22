import React,{useState} from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import Header from '../components/header';
import Menu from '../components/manu/menue';
import ListRes from '../components/RestaurantList/ListRes';
import SliderImage from '../components/slider/Slider';

export default function HomeScreen({navigation }) {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <SafeAreaView>
   <Header navigation={navigation } setShowMenu={setShowMenu} showMenu={showMenu}/> 
   <SliderImage/>
   <ListRes />
   {showMenu?<Menu setShowMenu={setShowMenu} showMenu={showMenu} navigation={navigation }/>:<></>}    

     </SafeAreaView>
  );
}
