import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';

import sora from "../assets/cover.png";

export default function RegisterScreen({navigation}) {
  
  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("../assets/photo.png")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}
      <TouchableOpacity onPress={()=>navigation.navigate("SignIn")} >
      <text >SIGN IN</text>
      
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=> navigation.navigate("Register") } >
        <text >  REGISTER</text>
       
        </TouchableOpacity>

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
});