import React, { useState } from 'react';

import { View, StyleSheet, Text, SafeAreaView , TextInput} from 'react-native';
import { Button } from 'react-native-paper';

const RegisterAndLogin=()=> {
    
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("");
    const registerScreen=()=>{
        return( 
 
    <View>
    <TextInput placeholder='Email' style={styles.inputBtn} onChange={(e)=>setemail(e.target.value)} value={email}/>
    <TextInput placeholder='Password' style={styles.inputBtn}  onChange={(e)=>setemail(e.target.value)} value={password}/>
    <Button onPress={(e)=>console.log("home")}>Submite</Button>
    <Text onPress={()=>console.log("hello")} >Go to sign in page</Text>
    </View>
  
        )
    }

            return (
            <SafeAreaView style={styles.container}>
       {registerScreen()}
    
                </SafeAreaView>
                 );
            }

const styles = StyleSheet.create({
    container:{
            flex:1,
            width:"100%",
    },
    inputBtn:{
        width:300,
        backgroundColor:"white",
        height:50,
        marginBottom:10
    }
    
})

export default RegisterAndLogin