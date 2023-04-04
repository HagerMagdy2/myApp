import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase';
import { useState } from 'react';

export default function RegisterScreen({navigation}) {
    const user = auth.currentUser;
    const[email , setEmail]=useState('');
    const[password , setPassword]=useState('');
    const handleSignUp = ()=>{
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigation.navigate("Welcome");
      
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert("Can not Creat this account may be you have an account with name " );
      console.log(errorMessage);
    });
    }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Forget.jpg")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}
      <TouchableOpacity  onPress={ ""}  style={styles.Sendbutton}>
      <Text style={styles.statmentButton}>Send verification Link  </Text> 
    </TouchableOpacity>

      
      <TextInput
        style={styles.inputE}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Your E-Mail"
        keyboardType='email-address'
      />

      
    </View>
  );
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
        borderWidth: 1,
        padding: 5,
        position: 'absolute',
        right: 120,
        bottom: 200,
      },
      statmentButton: {
        color: '#FFFCF8',
        fontFamily:'italic',
        
        fontWeight: 'bold',
  },
  
  Sendbutton:{
        
    width: "50%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "#713522",
   // flexDirection: 'row',
    paddingHorizontal: 100,
    paddingVertical: 6,
    borderRadius: 50,
    marginBottom: 6,
    minWidth: '30%',
    textAlign: 'center',
    position: 'absolute',
  top: 800,
right:150,
    width:350,

},

});