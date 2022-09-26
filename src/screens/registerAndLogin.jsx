import React, { useState ,useEffect} from 'react';

import { View, StyleSheet, Text, SafeAreaView , TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged,User} from "firebase/auth";
import app from '../../firebaseConfig';


// ====================== uid "BEaSox2mhiY1tFj7GLAiJspS9bi1"============================


const RegisterAndLogin=({navigation})=> {
    const [refOrLog,setRefORLog]=useState(1)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("");
    const auth=getAuth(app)
// ============================handle Submit===========================
    const handleSubmit=(refOrLog)=>{
        console.log(refOrLog,"hello",email,password);
    if(refOrLog==1){
    createUserWithEmailAndPassword(auth,email,password).then((res=>{
    console.log(res,"account created seccssfully");
    setemail("");
    setpassword("");
    setRefORLog(2);
    })).catch((err)=>
    console.log(err.message))
    }else if(refOrLog==2){
    signInWithEmailAndPassword(auth,email,password).then((res)=>{
    console.log("sign in with email");
    setemail("");
    setpassword("");
    setRefORLog(1)
        navigation.navigate("Home");
    }).catch((err)=>console.log(err.message));
    }
    };

    const registerScreen=()=>{
        return(
            <> 
 <View style={{height:"400px",width:"100%",backgroundColor:"gray"}}> 

<Text>Regestration page</Text>
 </View>
    <View style={{margin:"50px "}}>
    <TextInput placeholder='Email' style={styles.inputBtn} onChange={(e)=>setemail(e.target.value)} value={email}/>
    <TextInput placeholder='Password' style={styles.inputBtn}  onChange={(e)=>setpassword(e.target.value)} value={password}/>
    <Button onPress={()=>handleSubmit(refOrLog)}>Submite</Button>
    <Text onPress={()=>setRefORLog(2)}>Go to sign in page</Text>
    </View>
</>
        )
    }

const loginInScreen=()=>{
    return (
<>
<View style={{height:"400px",width:"100%",backgroundColor:"skyblue"}}> 

<Text>
    login Page</Text>
 </View>
        <View style={{margin:"50px"}}>
        <TextInput placeholder='Email' style={styles.inputBtn} onChange={(e)=>setemail(e.target.value)} value={email}/>
        <TextInput placeholder='Password' style={styles.inputBtn}  onChange={(e)=>setpassword(e.target.value)} value={password}/>
        <Button onPress={()=>handleSubmit(refOrLog)}>Submite</Button>
        <Text onPress={()=>setRefORLog(1)}>Go to registration  page</Text>
        </View>
</>
    )
}

            return (
            <SafeAreaView style={styles.container}>
       {refOrLog==1?registerScreen():loginInScreen()}
    
                </SafeAreaView>
                 );
            }

const styles = StyleSheet.create({
    container:{
        display:"flex",
   
            flex:1,
            width:"100%",
          
    },
    
    inputBtn:{
        width:300,
        backgroundColor:"white",
        height:50,
        marginBottom:10,
        paddingLeft:20,
        fontSize:20,
        outline:"",
        color:"gray"
    }
    
});


export default RegisterAndLogin
