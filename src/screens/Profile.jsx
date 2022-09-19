import React from 'react';
import { View, Text , StyleSheet,Image , SafeAreaView} from 'react-native';


import{getFirestore,collection,addDoc} from "firebase/firestore"
import app from '../../firebaseConfig';


export default function Profile() {


    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}></View>
   <Text>ggggnhnhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
     </SafeAreaView>
  );
}


const styles=StyleSheet.create({
    container:{
        display:"flex",
      width:"100%",
      height:200,
        backgroundColor:"gray",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
    },
    img:{
        height:100,
        width:100,
    }
})
