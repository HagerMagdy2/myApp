import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from '../firebase';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 


export default function RegisterScreen({navigation}) {
    const user = auth.currentUser;
    const[name , setName]=useState('');
    const[email , setEmail]=useState('');
    const[password , setPassword]=useState('');
    const handleSignUp = ()=>{
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigation.navigate("Welcome");
      console.log("Done");

      const user = userCredential.user;
      AddUserToDatabase();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert("Can not Creat this account may be you have an account with name " );
      console.log(errorMessage);
    });
    }
    const AddUserToDatabase = async()=>{
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        email:email,
        name:name
   
  });
    
    };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Register.jpg")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}
      <TouchableOpacity style={styles.button}
        onPress={handleSignUp}>
      <text style={styles.statmentButton}>Sign Up</text>
      </TouchableOpacity>

      <TextInput
        style={styles.inputN}
        onChangeText={setName}
        value={name}
        placeholder="Enter Your Name"
        keyboardType='email-address'
      />

      

      <TextInput
        style={styles.inputE}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Your E-Mail"
        keyboardType='email-address'
      />
     

<TextInput


        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Your Password"
        keyboardType='visible-password'
        secureTextEntry
      />
    <StatusBar style="auto" />
      
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
      inputN: {
        borderRadius:50,
        height: 40,
        width: 400,

        margin: 12,
        borderWidth: 0.5,
        padding: 5,
        position: 'absolute',
        right: 50,

        bottom: 370,

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
        color: '#FFFCF8',
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
        height: 50,
},
});