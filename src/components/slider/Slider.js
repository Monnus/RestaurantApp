import React,{useState} from 'react';
import { View, Text,ScrollView,StyleSheet,StatusBar,Dimensions,Image} from 'react-native';

const {width:WIDTH,height:HEIGHT}= Dimensions.get("window");
const SliderImage=()=>{
const Imgs=[
  "https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422__340.jpg",
  "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078__340.jpg"
  
]
const [imgActive, setimgActive]=useState(0);
onchange=(nativeEvent)=>{
  if(nativeEvent){
    const slide= Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layotMeasurement.width);
    if(slide!= imgActive){
      setimgActive(slide)
    }
  }
}
return (
  <View style={styles.container}>
     <View style={styles.wrap}>
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      horizontal={true}
      style={styles.wrap}>
   <Image source={{uri:"https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg "}} style={{position:"relative",top:"0",height:"100%", width:"height"}} resizeMode="centerjk"/>
      </ScrollView>
      <View style={styles.wrapDot}> 
            {Imgs.map((e,index)=>
            <Text key={e} style={imgActive==index ? styles.dotActive:styles.dot}>
              ●
            </Text>
            )}
      </View>
   
     </View>

        
     </View>
  );
}

export default  SliderImage;

const styles=StyleSheet.create({
 container:{
  flex:1,
},
wrap:{

WIDTH,
height:HEIGHT*0.25,
 },
 wrapDot:{
  position:"absolute",
  bottom:"0",
  flexDirection:"row",
  alignSelf:"center",
 },
 dotActive:{
  margin:"3px",
  color:"black",
 },
 dot:{
  margin:"3px",
  color:"white"
 }
})