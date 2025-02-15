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
import { auth, db } from "../firebase";
import sora from "../assets/cover.png";
import { signOut } from "firebase/auth";

export default function HomeScreen({ navigation }) {
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
      <Image style={styles.image} source={require("../assets/we.jpg")}></Image>
      <View>
        {/* <text style={styles.statmentButton} >Welcome</text> */}
        <Text style={styles.statButton}> {auth.currentUser?.displayName}</Text>
        <StatusBar style="auto" />
      </View>
      <View>
      <Image style={styles.imageh} source={require("../assets/hot.jpg")}></Image>
      
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.SignInbutton}>
          <Text style={styles.statmentButton}>HotCoffe </Text>
        </TouchableOpacity>
        <Image style={styles.imagec} source={require("../assets/ice.jpg")}></Image>
      
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.Registerbutton}
        >
          <Text style={styles.statmentButton}>IcedCoffe</Text>
        </TouchableOpacity>
      </View>
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
  imageh: {
    //flex: 1,
    //justifyContent: 'center',
    width: 200,
    height: 300,
    position: "absolute",
    bottom: -350,
    right: -270,
    width: 250,
    height: 250,
  },
  imagec: {
    //flex: 1,
    //justifyContent: 'center',
    width: 200,
    height: 300,
    position: "absolute",
    bottom: -350,
    right: 40,
    width: 250,
    height: 250,
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
    bottom: -400,
    right: 32,
    width: 260,
    height: 50,
  },
  SignInbutton: {
   // width: "50%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#713522",
    // flexDirection: 'row',
    paddingHorizontal: 100,
    paddingVertical: 6,
    borderRadius: 50,
    marginBottom: 6,
    minWidth: "50%",
    textAlign: "center",
    position: "absolute",
    bottom: -400,
    right: -270,
    width: 250,
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
    minWidth: "100%",
    textAlign: "center",
    
    
    // right: 50,
  },
  statButton: {
    color: "#6E4009",
    fontFamily: "italic",

    top: 55,
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
    bottom: 100,
    // right: 50,
  },
});
