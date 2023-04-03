import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';
<<<<<<< HEAD
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase';
import { useState } from 'react';

export default function SignInScreen({navigation}) {
    const user = auth.currentUser;
    const[email , setEmail]=useState('');
    const[password , setPassword]=useState('');
    const handleSignUp = ()=>{
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigation.navigate("WelcomeScreen");
      
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Can not Creat this account may be you have an account with name " );
    });
    }
=======
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

>>>>>>> 3dfe7753997face49284e7fd27d2ccb25b571ae1
  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("../assets/photo.png")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}
<<<<<<< HEAD
      <TouchableOpacity style={styles.button}
        onPress={handleSignUp}>
      <text style={styles.statmentButton}>SignIn</text>
=======
      

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
>>>>>>> 3dfe7753997face49284e7fd27d2ccb25b571ae1
      </TouchableOpacity>
      
<<<<<<< HEAD
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
      
=======
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
>>>>>>> 3dfe7753997face49284e7fd27d2ccb25b571ae1
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
        borderWidth: 0.5,
        padding: 5,
        position: 'absolute',
        right: 50,
        bottom: 300,
      },
      statmentButton: {
        color: '#000',
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
        height: 50,
  },
});