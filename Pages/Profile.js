import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from '../firebase';
import { signOut } from "firebase/auth";
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
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.navigate("HomeScreen");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert("Can not Creat this account may be you have an account with name " );
      console.log(errorMessage);
    });
  }
  return (

    <View style={styles.container}>
       <Image style={styles.image} source={require("../assets/profile.jpg")} ></Image>
      {/* <Text style={styles.textStyle}>Profile</Text> */}
      <Text  style={styles.textStyle}>email :{email}</Text>
    
      <Text style={styles.textStyle}>Name : {name}</Text>
    
      <TouchableOpacity style={styles.button}
        onPress={getUser}>
      <text style={styles.statmentButton}>Edit Up</text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignOut}  style={styles.SignInbutton}>
      <Text style={styles.statmentButton}>SignOut  </Text> 
    </TouchableOpacity>
   
    <TouchableOpacity  onPress={()=>navigation.navigate("Profile")}  style={styles.Registerbutton}>
      <Text style={styles.statmentButton}>TakeTour</Text> 
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
      paddingHorizontal: 100,
      paddingVertical: 6,
      borderRadius: 20,
      marginBottom: 6,
      minWidth: '30%',
      textAlign: 'center',
      position: 'absolute',
       bottom: 50,
       right: 200,
      width: 130,
      height:50,
     
},
Registerbutton:{
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 30,
  backgroundColor: "#713522",
 // flexDirection: 'row',
  paddingHorizontal: 100,
  paddingVertical: 6,
  borderRadius: 20,
  marginBottom: 6,
  minWidth: '30%',
  textAlign: 'center',
  position: 'absolute',
   bottom: 170,
   right: 200,
  width: 130,
  height:50,
 
 
},
SignInbutton:{
        
  width: "50%",
  borderRadius: 20,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 30,
  backgroundColor: "#713522",
 // flexDirection: 'row',
  paddingHorizontal: 100,
  paddingVertical: 6,
  borderRadius: 50,
  marginBottom: 6,
  minWidth: '30%',
  textAlign: 'center',
  position: 'absolute',
   bottom: 110,
   right: 200,
  width: 130,
 
 
},
textStyle: {
  color: '#633A09',
  fontFamily:'italic',
  
  fontWeight: 'bold',
  fontSize: 25,
  alignSelf: 'left',
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: 15,
  marginBottom: 5,
  minWidth: '50%',
  textAlign: 'left',
  position: 'relative',
  bottom: 0,
  right: 100,
},
});

//export default Profile