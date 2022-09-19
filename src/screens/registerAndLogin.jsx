import React, { useState } from 'react';

import { View, StyleSheet, Text, SafeAreaView , TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import app from '../../firebaseConfig';

const RegisterAndLogin=()=> {
    const [refOrLog,setRefORLog]=useState(1)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("");
    const auth=getAuth(app)
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

    const handleSubmit=(refOrLog)=>{
if(refOrLog==1){
createUserWithEmailAndPassword(auth,email,password).then((res=>{
    console.log(res,"account created seccssfully");
})).catch((err)=>console.log(err))
}else if(refOrLog==2){
    signInWithEmailAndPassword(auth,email,password).then((res)=>{
    console.log(res,"sign in with email");
    const userObj=new Object.assign(res)
    }).catch((err)=>console.log(err);)
}
    };
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