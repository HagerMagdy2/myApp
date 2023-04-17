import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

export default function RegisterScreen({ navigation }) {
  //const user = auth.currentUser;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (text) => {
    setName(text);
    setNameError('');
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError('');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('');
  };

  const handleSubmit = () => {
    // Perform validation
    let valid = true;

    if (name.trim()==="") {
      setNameError("Please enter your name");
      valid = false;
    }

    if (email.trim()==="") {
      setEmailError("Please enter your email");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (password.trim()==="") {
      setPasswordError("Please enter your password");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (valid) {
      // Submit form
      handleSignUp();
    }
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Profile");
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
  };
  const AddUserToDatabase = async () => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      email: email,
      name: name,
    });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/Register.jpg")}
      ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <text style={styles.statmentButton}>Sign Up</text>
        </TouchableOpacity>

   
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
        style={styles.inputN}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Enter Your Name"
        keyboardType="email-address"
      />
       {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
      <TextInput
        style={styles.inputE}
        onChangeText={handleEmailChange}
        value={email}
        placeholder="Enter Your E-Mail"
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        onChangeText={handlePasswordChange}
        value={password}
        placeholder="Enter Your Password"
        keyboardType="visible-password"
        secureTextEntry
      />

      {passwordError ? (
        <Text style={styles.error}>{passwordError}</Text>
      ) : null}
      <StatusBar style="auto" />


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    //flex: 1,
    //justifyContent: 'center',
    width: 600,
    height: 1080,
    position: "absolute",
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
        bottom: 220,
        fontSize: 16,
  },
  inputN: {
    borderRadius:500,
    height: 50,
    width: 500,
    margin: 12,
    borderWidth: 0.5,
    padding: 5,
    position: 'absolute',
    right: 30,
    bottom: 380,
    fontSize: 16,
  
  },
  inputE: {
    borderRadius:500,
    height: 50,
    width: 500,
    margin: 12,
    borderWidth: 0.5,
    padding: 5,
    position: 'absolute',
    right: 30,
    bottom: 300,
    fontSize: 16,
  },
  statmentButton: {
    color: "#FFFCF8",
    fontFamily: "italic",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    marginBottom: 5,
    minWidth: "50%",
    textAlign: "center",
    position: "relative",
    bottom: 0,
    // right: 50,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 50,
    backgroundColor: "#713522",
    alignSelf: "auto",
    //marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: "30%",
    textAlign: "center",
    position: "absolute",
    bottom: 100,
    right: 205,
    width: 45,
    height: 50,
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