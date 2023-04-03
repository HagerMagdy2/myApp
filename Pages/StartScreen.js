import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, PixelRatio } from 'react-native';
import { Text } from 'react-native';

import sora from "../assets/cover.png";

export default function StartScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/cover.png")} ></Image>
            {/* <image source={require("../assets/cover.png")}/> */}

            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.Startbutton} >
                <text style={styles.statmentButton} > Get Started</text>
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
      Startbutton:{
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
        height: 50,
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