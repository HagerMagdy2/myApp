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
      //console.log(errorMessage);
    });
    }
    


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Register.jpg")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}
      <TouchableOpacity style={styles.button}
        onPress={handleSignUp}>
      <text style={styles.statmentButton}>Sign Up</text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity style={styles.HomeBtn} onPress={()=>navigation.navigate("HomeScreen")}>
      <Text style={styles.statmentButton}>  Home  </Text> 
    </TouchableOpacity>
      </View>
     
      
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
      HomeBtn: {
        paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 50,
            fontFamily:'italic',
            backgroundColor: '#713522',
            alignSelf: 'auto',
            //marginHorizontal: '1%',
            marginBottom: 6,
            fontWeight: 'bold',
            minWidth: '30%',
            textAlign: 'center',
            position: 'absolute',
            bottom: 100,
            right: -90,
            width: 180,
            bottom:-450,
            height:50,
      },
      input: {
        borderRadius:10,
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
        borderRadius:10,
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
        bottom: 7,
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
HomeBtn: {
  paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 50,
      fontFamily:'italic',
      backgroundColor: '#713522',
      alignSelf: 'auto',
      //marginHorizontal: '1%',
      marginBottom: 6,
      fontWeight: 'bold',
      minWidth: '30%',
      textAlign: 'center',
      position: 'absolute',
      
      right: -90,
      width: 180,
      bottom:-500,
      height:50,
},
});