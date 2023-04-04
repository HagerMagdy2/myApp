import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';
import { signInWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import auth from '../firebase';
import { useState } from 'react';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = auth.currentUser;
  
  const handleSignIn = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     navigation.navigate("Welcome");
      
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("The User Not Found")
    });
  }
  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("../assets/photo.png")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}

      
      <TouchableOpacity style={styles.button} onPress={handleSignIn}   >
      <text style={styles.statmentButton} >Sign In</text>
      </TouchableOpacity>
      <StatusBar style="auto" /> 
      
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
      
      
      <View > 
    
<TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("HomeScreen")}>
      <Text style={styles.Text}>Home  </Text> 
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
        height:50,
},
});