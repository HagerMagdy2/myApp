import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Pages/HomeScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import SignInScreen from "./Pages/SignInScreen";
import StartScreen from "./Pages/StartScreen";
import ForgotPass from "./Pages/ForgotPass";
import WelcomeScreen from "./Pages/WelcomeScreen";
import foo from "./Pages/foo";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Card from "./Pages/Card";
import Ho from "./Pages/Ho";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          
        }}
      >
        {/* <Stack.Screen name="Profile" component={Profile} />  */}
        {/* <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Forgot" component={ForgotPass} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="foo" component={foo} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Ho" component={Ho} />
         <Stack.Screen name="Card" component={Card} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
},
});