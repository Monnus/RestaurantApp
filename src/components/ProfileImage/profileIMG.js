import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, {useState} from 'react';
import { View, Text,Image } from 'react-native';
import { collection, doc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Elevations from 'react-native-elevation';

export default function ComProfileIMG({getFirebaseData,image}) {
    const defaultImage=require("../../Image/emptyIcon.png");    



  return (
    <>
    {image?
        <Image source={{uri:image}} style={{width:"150px",height:"100px",marginBottom:"5px",...Elevations[4]}}/>
        : <Image source={{uri:defaultImage}} style={{width:"150px",height:"100px",marginBottom:"5px",...Elevations[4]}}/>
    }
    </>
  );
}
