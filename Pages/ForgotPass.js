import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';
import { sendPasswordResetEmail } from "firebase/auth";
import auth from '../firebase';
import { useState } from 'react';

export default function ForgetPass({navigation}){
  
const[Email,setEmail]=useState('')

const handleSignIn = () => {
    
      navigation.navigate("SignIn");
}
const handleForgotPassword= () => {
sendPasswordResetEmail(auth, Email)
  .then(() => {
    console.log("password sent")
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Email doesn't Exist")
    // ..
  });
}
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Forget.jpg")} ></Image>
      {/* <Text style={styles.title}>Enter your email below and we'll help you to reset your password</Text> */}
      <TextInput style={styles.inputE}
        onChangeText={setEmail}
        value={Email}
        placeholder="Enter Your E-Mail"
        keyboardType='email-address'
      />
  <TouchableOpacity style={styles.Sendbutton} onPress={handleForgotPassword}>
            <Text style={styles.statmentButton}>Send Link</Text>          
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Back to Sign in</Text>
                  
          </TouchableOpacity> */}
         
          
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
      borderWidth: 1,
      padding: 5,
      position: 'absolute',
      right: 120,
      bottom: 200,
    },
    statmentButton: {
      color: '#FFFCF8',
      fontFamily:'italic',
      fontSize:20,
      
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