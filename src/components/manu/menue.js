import React from 'react';
import { View, Text, StyleSheet,Dimensions,SafeAreaView,Image} from 'react-native';
import ProfileBtn from '../profileBtn/Btn';
import "../slider/Slider"

export default function Menu() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../Image/emptyIcon.png")}/>
     <ProfileBtn name={"profile"}/>
     <ProfileBtn name={"Add resturant"}/>
     <ProfileBtn name={"my reserved"}/>


     </View >
  );
}
const{width,height}=Dimensions.get("window")

const styles=StyleSheet.create(
    {
        container:{
            display:"flex",
            position:"absolute",
            width:(width*50/100),
            alignItems:"center",
            paddingTop:"40px 0",
            height,
            backgroundColor:"rgba(217, 217, 217,0.8)",
            zIndex:1,

        },
        img:{
          marginTop:"50px",
          marginBottom:"100px",
                height:"150px",
                width:"150px",
                margin:"0 10px 0 10px",

        }
    }
)
