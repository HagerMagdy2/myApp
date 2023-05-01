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
import { signOut } from "firebase/auth";
import { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";

export default function Profile({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [viewMode, setViewMode] = useState(true);
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
  const handleSave = () => {
    setViewMode(true);
    updateUserData();
    const isValidDate = moment(birthday, "MM/DD/YYYY", true).isValid();
    if (isValidDate) {
      // Save the birthday to your app's state or database
      console.log("Birthday saved:", birthday);
    } else {
      // Show an error message or alert the user to enter a valid date
      console.log("Invalid date entered");
    }
  };

  const handleEdit = () => {
    setViewMode(false);
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
  //getUser();
  {
    viewMode ? getUser() : null;
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert("Can not Creat this account may be you have an account with name " );
        console.log(errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/profile.jpg")}
      ></Image>

      {viewMode ? (
        <View>
          <Text style={styles.textStyle}>email :{email}</Text>

          <Text style={styles.textStyle}>Name : {name}</Text>

          <Text style={styles.textStyle}>Phone : {phone}</Text>

          <Text style={styles.textStyle}>Birthday : {birthday}</Text>

          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <text style={styles.statmentButton}>Edit Up</text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignOut} style={styles.SignInbutton}>
            <Text style={styles.statmentButton}>SignOut </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.Registerbutton}
          >
            <Text style={styles.statmentButton}>TakeTour</Text>
          </TouchableOpacity>

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
        </View>
      ) : (
        <View>
          <Text styles={styles.textStyle}>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            autoFocus
          />
          <Text styles={styles.textStyle}>Email:</Text>
          <TextInput
            style={styles.inputE}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Text styles={styles.textStyle}>Phone:</Text>
          <TextInput
            style={styles.inputP}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            autoFocus
          />
          <TextInput
            style={styles.inputB}
            placeholder="MM/DD/YYYY"
            value={birthday}
            onChangeText={setBirthday}
          />
          <TouchableOpacity style={styles.SignInbutton} onPress={handleSave}>
            <text style={styles.statmentButton}>Save</text>
          </TouchableOpacity>

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
        </View>
      )}
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
    borderRadius: 7,
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 0.5,
    padding: 5,
    position: "absolute",
    right: -200,
    bottom: -150,
  },
  inputE: {
    borderRadius: 7,
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 0.5,
    padding: 5,
    position: "absolute",
    right: -200,
    bottom: -200,
  },
  inputP: {
    borderRadius: 7,
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 0.5,
    padding: 5,
    position: "absolute",
    right: -200,
    bottom: -250,
    fontSize: 16,
  },
  inputB: {
    borderRadius: 7,
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 0.5,
    padding: 5,
    position: "absolute",
    right: -200,
    bottom: -300,
    fontSize: 16,
  },
  statmentButton: {
    color: "#fff",
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
    //right: 50,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 50,
    backgroundColor: "#713522",
    alignSelf: "auto",
    //marginHorizontal: '1%',
    paddingHorizontal: 100,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 6,
    minWidth: "30%",
    textAlign: "center",
    position: "absolute",
    bottom: -210,
    right: 50,
    width: 130,
    height: 50,
  },
  Registerbutton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#713522",
    // flexDirection: 'row',
    paddingHorizontal: 100,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 6,
    minWidth: "30%",
    textAlign: "center",
    position: "absolute",
    bottom: -280,
    right: 50,
    width: 130,
    height: 50,
  },
  SignInbutton: {
    width: "50%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#713522",
    // flexDirection: 'row',
    paddingHorizontal: 100,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 6,
    minWidth: "30%",
    textAlign: "center",
    position: "absolute",
    bottom: -350,
    right: 50,
    width: 130,
  },
  textStyle: {
    color: "#633A09",
    fontFamily: "italic",

    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "left",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    marginBottom: 5,
    minWidth: "50%",
    textAlign: "left",
    position: "relative",
    bottom: -150,
    right: 100,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profilePhoto2: {
    width: 150,
    height: 150,
    borderRadius: 75,
    bottom: 300,
    right: -70,
  },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    bottom: 300,
    right: -70,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#aaa",
  },
});

//export default Profile