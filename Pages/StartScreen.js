import React from 'react';
import {Text, StyleSheet, View, Image,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


const StartScreen = ({navigation}) => {
  return (
    <View style={style.container}>
     
          <Image
            style={style.image}
            source={require("../assets/start10.jpg")}
          />
       
      
<View>
 <TouchableOpacity  onPress={() => navigation.navigate('SignIn')} style={style.btnContainer}>
      
        <Text style={style.title}>Get Started</Text> 
  
   </TouchableOpacity>
   </View>  
      </View>
      
  );
};

const style = StyleSheet.create({
  container: {
   
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    //flex: 1,
    //justifyContent: 'center',
    width: 590,
    height: 1090,
    position: "absolute",
    
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: "#713522",
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'grey',
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // image: {
  //   flex: 20,
  //   justifyContent: 'center',
  //   width: '100%',
   
  //   resizeMode: 'contain',
  //   top: 0,
  // },
  title: {color: '#5B2413', fontWeight: 'bold', fontSize: 20},
  btnContainer: {
   // width: "50%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: '#FBEAB4',
    // flexDirection: 'row',
    paddingHorizontal: 100,
    paddingVertical: 6,
    borderRadius: 50,
    marginBottom: 6,
    minWidth: "30%",
    textAlign: "center",
    position: "absolute",
    bottom:-500,
    right: -180,
    width: 350,
  
  },
});

export default StartScreen;