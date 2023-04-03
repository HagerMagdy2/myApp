import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { Text } from 'react-native';

import sora from "../assets/cover.png";

export default function HomeScreen({navigation}) {
 
  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("../assets/photo.png")} ></Image>
      {/* <image source={require("../assets/cover.png")}/> */}
     
      <View > 

<TouchableOpacity  onPress={()=>navigation.navigate("SignIn")}  style={styles.Startbutton}>
      <Text style={styles.statmentButton}>SignIn            </Text> 
    </TouchableOpacity>
   
   
    
    <TouchableOpacity  onPress={()=>navigation.navigate("Register")}  style={styles.Startbutton}>
      <Text style={styles.statmentButton}>Register          </Text> 
    </TouchableOpacity> 
   
    
    </View> 
    </View>
)



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
      }, Startbutton:{
        
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
        borderRadius: 50,
        marginBottom: 6,
        minWidth: '30%',
        textAlign: 'center',
        bottom: 1,
        right: 50,
        width: 130,
       
       
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


});