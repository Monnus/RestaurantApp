import React from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';

const ProfileBtn=({name,navigation})=>{
  const paths={
    "my reserved":"History",
    "Add resturant":"AddRestaurant",
    "profile":"Profile"
  };
  const handleNavigate=()=>{
    console.log(paths[name],name);
    navigation.navigate(`${paths[name]}`)
  }

    return ( 

    <Button color="#2D3E48" style={{marginBottom:"20px",width:"90%"}} onPress={()=>console.log(name)}>{name}</Button>
    );
};



const styles = StyleSheet.create({

})
export default ProfileBtn;

