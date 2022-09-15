import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import {Button} from "react-native-paper"

const ProfileBtn=({name})=>{
    return ( 
    <Button color="#2D3E48" style={{marginBottom:"20px",width:"90%"}}mode="contained">{name}</Button>
  );
}
const styles = StyleSheet.create({
    btn:{
        
    }
})
export default ProfileBtn;

