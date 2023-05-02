import React from 'react';
import {Text, StyleSheet, View, Image,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


const StartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
       <View>
          <Image
            style={{ width: 580, height: 450}}
            source={require("../assets/7.jpeg")}
          />
        </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
            Delicious Coffee
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 22,
              textAlign: 'center',
              color: 'grey',
            }}>
            We help you to find best and delicious drink
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}
          >title="Get Started"</TouchableOpacity> */}

 <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')} style={style.btnContainer}>
       <View style={style.btnContainer}> 
        <Text style={style.title}>Get Started</Text> 
      </View> 
   </TouchableOpacity>
         
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
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
    backgroundColor: "#713522",
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartScreen;