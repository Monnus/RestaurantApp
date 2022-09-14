import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';

const ProfileBtn=({name})=>{
    return ( 
    <Button title="Profile" containerStyle={{
        width:200,
        marginHorizontal: 50,
        marginVertical: 10,
        marginBottom:6}}
        buttonStyle={{
            backgroundColor:"rgba(45, 62, 72,0.8)",
            borderRadius: 3,
        }}>{name}</Button>
  );
}
const styles = StyleSheet.create({
    
})
export default ProfileBtn;

