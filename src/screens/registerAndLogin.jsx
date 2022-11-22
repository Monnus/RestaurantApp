import React, { useState ,useEffect} from 'react';

import { View, StyleSheet, Text, SafeAreaView ,ImageBackground, TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import app from '../../firebaseConfig';


// ====================== uid "BEaSox2mhiY1tFj7GLAiJspS9bi1"============================


const RegisterAndLogin=({navigation})=> {
    const [refOrLog,setRefORLog]=useState(1)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("");
    const auth=getAuth(app)
    const image=[{uri:"https://th.bing.com/th/id/R.90bdf1fd18dffa951e4f60be8655170a?rik=JZeUNXZgiPC%2bjA&riu=http%3a%2f%2ffarm8.staticflickr.com%2f7050%2f6951325549_650167aa42.jpg&ehk=X%2fY8sQQxCEtVta%2fAOezQnNxRcZS0GCRJuA6N4ffoXMY%3d&risl=&pid=ImgRaw&r=0"},{uri:"https://cravedfw.files.wordpress.com/2012/08/fft1.jpg?w=998&h=664"}]

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
    setRefORLog(1);
    navigation.navigate("Home");
    }).catch((err)=>console.log(err.message));
    }
    };
    
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user.email){
                navigation.navigate("Home")
            }
        })

    },[auth])

    const registerScreen=()=>{

        return(
            <> 
 <View style={{height:"400px",width:"100%",backgroundColor:"gray"}}> 
<ImageBackground source={image[0]} style={{height:"400px",width:"100%",backgroundColor:"gray" ,resizeMode: 'cover',
    justifyContent: 'center',}}>
<Text style={{flex:1,color:"white",fontSize:20,}}>Registration</Text>
</ImageBackground>
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
<ImageBackground source={image[1]} style={{height:"400px",width:"100%",backgroundColor:"gray" ,resizeMode: 'cover',justifyContent: 'center',}}>
<Text style={{flex:1,color:"white",fontSize:"20px"}}>Login screen</Text>
</ImageBackground>

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
