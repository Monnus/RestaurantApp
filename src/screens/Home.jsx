import React from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import Header from '../components/header';
import SliderImage from '../components/slider/Slider';

export default function HomeScreen() {
  return (
    <SafeAreaView>
   <Header /> 
   <SliderImage/>
     </SafeAreaView>
  );
}
