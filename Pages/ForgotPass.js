import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';

import sora from "../assets/cover.png";

export default function ForgotPass({navigation}) {
  
  return (
    <View >
       <Image style={styles.image} source={require("../assets/photo.png")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}
     
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