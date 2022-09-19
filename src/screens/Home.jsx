import React from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import Header from '../components/header';
import ListRes from '../components/RestaurantList/ListRes';
import SliderImage from '../components/slider/Slider';

export default function HomeScreen({navigation }) {
  return (
    <SafeAreaView>
   <Header navigation={navigation } /> 
   <SliderImage/>
   <ListRes/>
     </SafeAreaView>
  );
}
