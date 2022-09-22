import React from 'react';
import { View, Text, StyleSheet,Dimensions,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import ProfileBtn from '../profileBtn/Btn';
import { Ionicons } from '@expo/vector-icons';
import Elevations from 'react-native-elevation';

export default function Menu({setShowMenu,showMenu,navigation}) {
  // console.log(navigation.navigate("Profile"));
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{ height:"30px",width:"10px"}} onPress={()=>setShowMenu(!showMenu)}>
      <Ionicons name="menu" size={54} color="black"  />
        </TouchableOpacity>
      <Image style={styles.img} source={require("../../Image/emptyIcon.png")}/>
      <View>

     <ProfileBtn name={"profile"} navigation={navigation}/>
     <ProfileBtn name={"Add resturant"} navigation={navigation}/>
     <ProfileBtn name={"my reserved"} navigation={navigation}/>
      </View>


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
            backgroundColor:"rgba(217, 217, 217,0.9)",
            zIndex:10,
        overflow:"visible",
        ...Elevations[4]

        },
        img:{
          marginTop:"50px",
          marginBottom:"50px",
                height:"150px",
                width:"150px",
                margin:"0 10px 0 10px",

        }
    }
)
