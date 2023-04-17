import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from '../firebase';

import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore"; 

export default function Profile  ({navigation})  {
  const[name , setName]=useState('');
  const[email , setEmail]=useState('');
  const[password , setPassword]=useState('');
  const getUser =async()=>{
    const docRef = doc(db, "users",  auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    const data =docSnap.data();
    setEmail(data.email);
    setName(data.name);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    
  }
  getUser();
  return (

    <View style={styles.container}>
       <Image style={styles.image} source={require("../assets/photo.png")} ></Image>
<<<<<<< HEAD
      <Text style={styles.textStyle}>Profile</Text>
      <Text style={styles.textStyle}>Name : {name}</Text>
      <Text  style={styles.textStyle}>email : {email}</Text>
   
     
      
=======
      <Text style={styles.textStyles}>Profile</Text>
      <Text  style={styles.textStyle}>email</Text>
      <Text style={styles.textStyle}>{email}</Text>
      <Text style={styles.textStyle}>Name</Text>
      <Text style={styles.textStyle}>{name}</Text>
>>>>>>> 8c6a235558f15ee1b8d97a1a1019b3f3715a51d1
      <TouchableOpacity style={styles.button}
        onPress={getUser}>
      <text style={styles.statmentButton}>Edit</text>
      </TouchableOpacity>
      
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
      //flex: 1,
      //justifyContent: 'center',
      width:600,
      height: 1080 ,
      position: 'absolute',
    },
    input: {
      borderRadius:50,
      height: 40,
      width: 400,
      margin: 12,
      borderWidth: 0.5,
      padding: 5,
      position: 'absolute',
      right: 50,
      bottom: 220,
    },
    inputE: {
      borderRadius:50,
      height: 40,
      width: 400,
      margin: 12,
      borderWidth: 0.5,
      padding: 5,
      position: 'absolute',
      right: 50,
      bottom: 300,
    },
    statmentButton: {
      color: '#fff',
      fontFamily:'italic',
      
      fontWeight: 'bold',
      fontSize: 25,
      alignSelf: 'center',
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 15,
      marginBottom: 5,
      minWidth: '50%',
      textAlign: 'center',
      position: 'relative',
      bottom: 0,
     // right: 50,
},
button: {
  paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 50,
      backgroundColor: '#713522',
      alignSelf: 'auto',
      //marginHorizontal: '1%',
      marginBottom: 6,
      minWidth: '30%',
      textAlign: 'center',
      position: 'absolute',
      bottom: 100,
      right: 205,
      width: 45,
      height:50,
},
textStyle: {
  color: '#633A09',
  fontFamily:'italic',
  
  fontWeight: 'bold',
  fontSize: 25,
<<<<<<< HEAD
  alignSelf: 'left',
=======
  alignSelf: 'center',
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: 15,
  marginBottom: 1,
  minWidth: '50%',
  textAlign: 'center',
  position: 'relative',
  top:60,
 

 right: 150,
},
textStyles: {
  color: '#633A09',
  fontFamily:'italic',
  
  fontWeight: 'bold',
  fontSize: 50,
  alignSelf: 'center',
>>>>>>> 8c6a235558f15ee1b8d97a1a1019b3f3715a51d1
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: 15,
  marginBottom: 5,
  minWidth: '50%',
<<<<<<< HEAD
  textAlign: 'left',
  position: 'relative',
  bottom: 0,
=======
  textAlign: 'center',
  position: 'relative',
  top:50,
>>>>>>> 8c6a235558f15ee1b8d97a1a1019b3f3715a51d1
 // right: 50,
},
});

//export default Profile