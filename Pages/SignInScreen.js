import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';
import { signInWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import {auth,db} from '../firebase';
import { useState } from 'react';
import { provider } from '../firebase';
import GoogleButton from 'react-google-button';
import {  signInWithPopup } from "firebase/auth";

export default function SignIn({navigation}) {

  const[name , setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = auth.currentUser;
  
  const handleSignIn = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
  navigation.navigate("Welcome");
      console.log(auth.currentUser.uid)
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("The User Not Found")
    });
  }

  function signin(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.email)
    navigation.navigate("Welcome");
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert("Error");
    // ...
  });

   }
  return (
    <View style={styles.container}>
<Image style={styles.image} source={require("../assets/signIn.jpg")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}

      
   
      <StatusBar style="auto" /> 
      {/* <TextInput
        style={styles.inputN}
        onChangeText={setName}
        value={name}
        placeholder="Enter Your Name"
        keyboardType='email-address'
      /> */}
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
        
      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}   >
      
      <text style={styles.statmentButton} >Sign In</text>
      </TouchableOpacity>
      
      <View > 
    


   
    <GoogleButton style={styles.goglBtn} onClick={signin}/>
    <TouchableOpacity style={styles.HomeBtn} onPress={()=>navigation.navigate("HomeScreen")}>
      <Text style={styles.statmentButton}>  Home  </Text> 
    </TouchableOpacity>
  
    {/* <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigat("LogIn")}>
      <Text style={styles.Text}>LOGIN</Text> 
    </TouchableOpacity>  */}
    
    {/* <TouchableOpacity style={styles.loginBtn}   onPress={()=>navigation.navigate("SignUp")}>
      <Text style={styles.Text}>SignUp </Text> 
    </TouchableOpacity>  */}
  
    
    </View> 

      {/* <TouchableOpacity style={styles.button}
        onPress={handleSignIp}>
      <text style={styles.statmentButton}>SignIn</text>
      </TouchableOpacity> */}
      
      
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

      inputView: {
        backgroundColor: "#AEDEFE",
        borderRadius: 20,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
    

      input: {
        borderRadius:50,
        height: 50,
        width: 500,
        margin: 12,
        borderWidth: 0.5,
        padding: 5,
        position: 'absolute',
        right: 30,
        bottom: 340,
        fontSize: 16,
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
        bottom: 450,
      },
      inputE: {
        borderRadius:50,
        height: 50,
        width: 500,
        margin: 12,
        borderWidth: 0.5,
        padding: 5,
        position: 'absolute',
        right: 30,
        bottom: 400,
        fontSize: 22,
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
        bottom: 240,
        right:50,
        width: 500,
        height:53 ,
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
goglBtn: {
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
      
      right: -250,
      width: 500,
      bottom:-380,
      height:55,
      fontSize: 18,
},
forgot_button: {
  color: '#000',
  fontFamily:'italic',
  
  //fontWeight: 'bold',
  //fontSize: 25,
  alignSelf: 'center',
  paddingHorizontal: 8,
  paddingVertical: 6,
  //borderRadius: 15,
  marginBottom: 5,
 // minWidth: '50%',
  //textAlign: 'center',
  position: 'relative',
  top:210,
 // right: 50,
},
});