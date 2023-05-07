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
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
//import { signOut } from "firebase/auth";
import { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";
export default function EditProfile(navigation) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);
  
    const getUser = async () => {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          const data = docSnap.data();
          setEmail(data.email);
          setName(data.name);
          setPhone(data.phone);
          setBirthday(data.birthday);
          setProfilePhoto(data.profilePhoto);
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      };
    const handleSaveProfile = () => {
      // Implement your logic to save the user's profile here
      updateUserData();
    const isValidDate = moment(birthday, "MM/DD/YYYY", true).isValid();
    if (isValidDate) {
      // Save the birthday to your app's state or database
      console.log("Birthday saved:", birthday);
      navigation.navigate("Profile");
    } else {
      // Show an error message or alert the user to enter a valid date
      console.log("Invalid date entered");
    }
  };
  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setProfilePhoto(result.uri);
      
    }
  };
  const updateUserData = async () => {
    const washingtoRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(washingtoRef, {
      name: name,
      email: email,
      phone: phone,
      birthday: birthday,
      profilePhoto:profilePhoto,
    });
  };
    return (
      <View style={styles.container}>
        {/* <Image
        style={styles.image}
        source={require("../assets/prof.jpg")}
      ></Image> */}
      <TouchableOpacity onPress={handleChoosePhoto}>
            {profilePhoto ? (
              <Image
                source={{ uri: profilePhoto }}
                style={styles.profilePhoto2}
              />
            ) : (
              <View style={styles.placeholder}>
                <Text style={styles.placeholderText}>Add a photo</Text>
              </View>
            )}
          </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          
        />
        <TextInput
          style={styles.input}
          placeholder="MM/DD/YYYY"
            value={birthday}
            onChangeText={setBirthday}
        />
        <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
    </View>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F4F1EF',
    },
    title: {
      fontSize: 24,
      marginBottom: 30,
    },
    input: {
      width: '80%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: 5,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#713522',
      borderRadius: 5,
      padding: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize:16,
  },
  image: {
    //flex: 1,
    //justifyContent: 'center',
    width: 600,
    height: 1080,
    position: "absolute",
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    bottom: 150,
    right: 0,
   
  },
  profilePhoto2: {
    width: 150,
    height: 150,
    borderRadius: 75  ,
    bottom: 150,
    right: 0,
  },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
     bottom: 50,
    // right: -70,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#aaa",
  },
  });
  //export default EditProfile;