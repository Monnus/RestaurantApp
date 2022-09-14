import React from 'react';
import { View, Text, StyleSheet,Dimensions,SafeAreaView,Image} from 'react-native';
import ProfileBtn from '../profileBtn/Btn';


export default function Menu() {
  return (
    <SafeAreaView>
      <Image style={styles.img} source={require("../../Image/emptyIcon.png")}/>
       <ProfileBtn name={"Profile"}/>
       <ProfileBtn name={"Add Restuarant"}/>
       <ProfileBtn name={"My reserved"}/>
      
     </SafeAreaView>
  );
}
const{width,height}=Dimensions.get("window")

const styles=StyleSheet.create(
    {
        container:{
            display:"flex",
            position:"absolute",
            width:(width*70/100),
            height,
            backgroundColor:"rgba(217, 217, 217,0.4)",

        },
        img:{
                height:"200px",
                width:"50%",
                margin:"0 10px 0 10px",

        }
    }
)
