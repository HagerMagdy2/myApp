import React from 'react';
import {Text, StyleSheet, View, Image,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


const StartScreen = ({navigation}) => {
  return (
    <View style={style.container}>
     
          <Image
            style={{ width: "100%", height: "100%"}}
            source={require("../assets/pstart.webp")}
          />
       
      
<View>
 <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')} style={style.btnContainer}>
      
        <Text style={style.title}>Get Started</Text> 
  
   </TouchableOpacity>
   </View>  
      </View>
      
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  image: {
    flex: 20,
    justifyContent: 'center',
    width: '100%',
   
    resizeMode: 'contain',
    top: 0,
  },
  title: {color: 'white', fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
    backgroundColor: "#713522",
    alignSelf: "auto",
    //marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: "30%",
    textAlign: "center",
 
  
    
    width: 589,
    height: 80,
  },
});

export default StartScreen;