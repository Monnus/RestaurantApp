import React,{useState} from 'react';
import { View, Text,ScrollView,StyleSheet,StatusBar,Dimensions,Image} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const {width:WIDTH,height:HEIGHT}= Dimensions.get("window");
const SliderImage=({arrayOFres})=>{
const images=arrayOFres.map(img=>img.RESTUARANT_IMG)
const [imgActive, setimgActive]=useState(0);
// onchange=(nativeEvent)=>{
//   if(nativeEvent){
//     const slide= Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layotMeasurement.width);
//     if(slide!= imgActive){
//       setimgActive(slide)
//     }
//   }
// }
return (
  <View style={styles.container}>
 <View style={styles.wrap}>
  <SwiperFlatList
autoplay
autoplayDelay={5}
autoplayLoop
index={2}
showPagination
data={images}
renderItem={({ item }) => (
  <View style={[styles.child, { backgroundColor: item }]}>
<Image source={{uri:item}}  style={{height:(HEIGHT*0.45),width:"25rem"}}/>
  </View>
)}

    />
     </View>
     </View>
  );
}

export default  SliderImage;

const styles=StyleSheet.create({
 container:{
marginBottom:"30px"
},
child: { WIDTH, justifyContent: 'center' ,},
wrap:{
WIDTH,
height:HEIGHT*0.45,
backgroundColor:"blue"
 },
 wrapDot:{
  position:"absolute",
  bottom:"0",
  flexDirection:"row",
  alignSelf:"center",
 },

})