import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
//import { Text } from 'react-native';

export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>

            <text >SIGN IN</text>
            <Image style={styles.image} source={require("../assets/photo.png")} ></Image>
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
        width: 600,
        height: 1080,
        position: 'absolute',
    },
});