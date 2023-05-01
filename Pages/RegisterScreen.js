import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  image,
} from "react-native";
import { Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

export default function RegisterScreen({ navigation }) {
  const user = auth.currentUser;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (text) => {
    setName(text);
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSubmit = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!phone) {
      errors.phone = 'Phone is required';
    } else if (phone.length < 11) {
      errors.phone = 'Phone must be at least 11 characters';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      //alert('Submitted!');
      handleSignUp();
    }
  };


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Home");
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
      phone:phone,
    });
  };
  return (
    <View style={styles.container}>
       <Image
        style={styles.image}
        source={require("../assets/reg.jpg")}
      ></Image>
      {/* <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <text style={styles.statmentButton}>Sign Up</text>
      </TouchableOpacity> */}
      

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <text style={styles.statmentButton}>Sign Up</text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          style={styles.HomeBtn}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.statmentButton}> Home </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}
       <TextInput
        style={styles.input}
        placeholder="Enter your Phone"
        value={phone}
        onChangeText={handlePhoneChange}
      />
     <Text style={styles.errorText}>{errors.phone}</Text>
      {/* <StatusBar style="auto" /> */}
     
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
    flex: 1,
    justifyContent: 'center',
    width: 350,
    height: 400,
    position: "absolute",
    bottom: 750,
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
  HomeBtn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 50,
    fontFamily: "italic",
    backgroundColor: "#713522",
    alignSelf: "auto",
    //marginHorizontal: '1%',
    marginBottom: 6,
    fontWeight: "bold",
    minWidth: "30%",
    textAlign: "center",
    position: "absolute",

    right: -90,
    width: 180,
    bottom: -500,
    height: 50,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
},
});