import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput, Button,
  TouchableOpacity,
  Pressable,Image} from 'react-native';
import { Text } from 'react-native';
import { signInWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import auth from '../firebase';
import { useState } from 'react';

export default function SignIn({navigation}) {
  const hundelSignIn =()=>{
    signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  console.log("done sign")

  const user = userCredential.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage)
});}

  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("../assets/photo.png")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}
      

      <StatusBar style="auto" /> 
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email.  "
       //   value={email}
          placeholderTextColor="#000"
      //    onChangeText={setEmail}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password "
        //  value={password}

          placeholderTextColor="#000"
          secureTextEntry={true}
         // onChangeText= {setPassword}
         
          
        /> 
        
      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      </View> 
      
      <View > 
    <TouchableOpacity style={styles.loginBtn}   onPress={hundelSignIn }>
      <Text style={styles.Text}>SignIn  </Text> 
    </TouchableOpacity> 
<TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Home")}>
      <Text style={styles.Text}>Home  </Text> 
    </TouchableOpacity>
   
    {/* <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigat("LogIn")}>
      <Text style={styles.Text}>LOGIN</Text> 
    </TouchableOpacity>  */}
    
    <TouchableOpacity style={styles.loginBtn}   onPress={()=>navigation.navigate("SignUp")}>
      <Text style={styles.Text}>SignUp          </Text> 
    </TouchableOpacity> 
   
    
    </View> 
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
      inputView: {
        backgroundColor: "#AEDEFE",
        borderRadius: 20,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 40,
        flex: 1,
       // padding: 10,
       // marginLeft: 10,
        fontSize: 16,
        fontWeight: 'normal',
        forgot_button: {
          color :"#083EF8",
          height: 30,
          marginBottom: 30,
        },
      }
      });
