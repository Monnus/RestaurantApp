import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import Profile from './src/screens/Profile';
import RegisterAndLogin from './src/screens/registerAndLogin';
import AddRestaurant from './src/screens/AddRestuarant';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebaseConfig';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
const auth=getAuth(app);  
const [initialRoot,setInitialRoot]=useState("signIn")
useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user){
      console.log(user,"user Signed In");

   }else{
       console.log("no user found");
       setInitialRoot("signIn")
   }
  })
},[])
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={initialRoot}>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name="signIn" component={RegisterAndLogin} options={{headerShown:false}}/>
      <Stack.Screen name="AddRestaurant" component={AddRestaurant} options={{headerShown:false}}/>


    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
