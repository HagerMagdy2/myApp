import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';

import sora from "../assets/cover.png";

export default function ForgotPass({navigation}) {
  
  return (
    <View >
      <Text style={styles.title}> FORGET PASSWORD?</Text>
       <Image style={styles.image} source={require("../assets/photo.png")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}
      <TouchableOpacity  onPress={ ""}  style={styles.Sendbutton}>
      <Text style={styles.statmentButton}>Send verification Link  </Text> 
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
      Sendbutton:{
        
        width: "50%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,
        backgroundColor: "#713522",
       // flexDirection: 'row',
        paddingHorizontal: 100,
        paddingVertical: 6,
        borderRadius: 50,
        marginBottom: 6,
        minWidth: '30%',
        textAlign: 'center',
        position: 'absolute',
         top: 800,
         right:150,
        width:350,
       
       
      },
      title:{
        fontWeight:"bold",
        fontSize:50,
        
      }

});