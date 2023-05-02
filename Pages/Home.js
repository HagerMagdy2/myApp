
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator ,BottomTabBar} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './WelcomeScreen';
import Profile from './Profile';
import Card from './Card';
import Favorites from './Favorites';
import Ho from './Ho'


const Tab = createBottomTabNavigator();
export default function Home({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Card') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        
      }}
     
    >
      <Tab.Screen name="Home" component={Ho} />
      <Tab.Screen name="Card" component={Card} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };

//   const handleConfirmPasswordChange = (text) => {
//     setConfirmPassword(text);
//   };

//   const handleSubmit = () => {
//     const errors = {};
//     if (!name) {
//       errors.name = 'Name is required';
//     }
//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }
//     if (!confirmPassword) {
//       errors.confirmPassword = 'Confirm Password is required';
//     } else if (password !== confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }
//     setErrors(errors);
//     if (Object.keys(errors).length === 0) {
//       alert('Submitted!');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={handleNameChange}
//       />
//       {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={handleEmailChange}
//       />
//       {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={handlePasswordChange}
//       />
//       {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry
//         value={confirmPassword}
//         onChangeText={handleConfirmPasswordChange}
//       />
//       {errors.confirmPassword && (
//         <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//       )}
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//     width: '80%',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });





// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { Text } from "react-native";
// import { useState } from "react";
// import moment from 'moment';
// import * as ImagePicker from 'expo-image-picker';

// export default function Home({navigation}) {
//   const [cartItems, setCartItems] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };

//   const handleConfirmPasswordChange = (text) => {
//     setConfirmPassword(text);
//   };

//   const handleSubmit = () => {
//     alert('Submitted!');
//   };

//   const validateForm = () => {
//     setIsValid(
//       name.length >= 3 &&
//         email.includes('@') &&
//         password.length >= 6 &&
//         password === confirmPassword
//     );
    
//   };

  
 

//   // return (
//   //   <View style={styles.container}>
//   //     <TouchableOpacity style={styles.button} onPress={() => handleAddToCart('Item 1')}>
//   //       <Text style={styles.buttonText}>Add to Cart</Text>
//   //     </TouchableOpacity>
//   //     <Text style={styles.cartText}>Cart Items: {cartItems.length}</Text>
//   //   </View>
//   // );








//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={handleNameChange}
//         onBlur={validateForm}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={handleEmailChange}
//         onBlur={validateForm}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={handlePasswordChange}
//         onBlur={validateForm}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry
//         value={confirmPassword}
//         onChangeText={handleConfirmPasswordChange}
//         onBlur={validateForm}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={!isValid}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//       {!isValid && (
//         <Text style={styles.errorText}>Please fill in all fields correctly</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//     width: '80%',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });
//   // const [birthday, setBirthday] = useState("");
//   // const [profilePhoto, setProfilePhoto] = useState(null);

//   // const handleChoosePhoto = async () => {
//   //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   //   if (status !== 'granted') {
//   //     alert('Sorry, we need camera roll permissions to make this work!');
//   //     return;
//   //   }
//   //   let result = await ImagePicker.launchImageLibraryAsync({
//   //     mediaTypes: ImagePicker.MediaTypeOptions.All,
//   //     allowsEditing: true,
//   //     aspect: [4, 3],
//   //     quality: 1,
//   //   });
//   //   if (!result.cancelled) {
//   //     setProfilePhoto(result.uri);
//   //   }
//   // };
//   // const handleSaveBirthday = () => {
//   //   const isValidDate = moment(birthday,'MM/DD/YYYY' ,true).isValid();
//   //   if (isValidDate) {
//   //     // Save the birthday to your app's state or database
//   //     console.log('Birthday saved:', birthday);
//   //   } else {
//   //     // Show an error message or alert the user to enter a valid date
//   //     console.log('Invalid date entered');
//   //   }
//   // };

//   // return (
//   //   <View style={styles.container}>
//   //     <TouchableOpacity onPress={handleChoosePhoto}>
//   //       {profilePhoto ? (
//   //         <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
//   //       ) : (
//   //         <View style={styles.placeholder}>
//   //           <Text style={styles.placeholderText}>Add a photo</Text>
//   //         </View>
//   //       )}
//   //     </TouchableOpacity>
//   //   </View>
//     // <View style={styles.container}>
//     //   <Text style={styles.label}>Enter your birthday:</Text>
//     //   <TextInput
//     //     style={styles.input}
//     //     placeholder="MM/DD/YYYY"
//     //     value={birthday}
//     //     onChangeText={setBirthday}
//     //   />
//     //   <TouchableOpacity style={styles.button} onPress={handleSaveBirthday}>
//     //     <Text style={styles.buttonText}>Save</Text>
//     //   </TouchableOpacity>
//     // </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: '#fff',
// //   },
// //   label: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   input: {
// //     width: '80%',
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     padding: 10,
// //     marginBottom: 20,
// //   },
// //   button: {
// //     backgroundColor: 'blue',
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   buttonText: {
// //     color: 'white',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   profilePhoto: {
// //     width: 150,
// //     height: 150,
// //     borderRadius: 75,
// //   },
// //   placeholder: {
// //     width: 150,
// //     height: 150,
// //     borderRadius: 75,
// //     backgroundColor: '#eee',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   placeholderText: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#aaa',
// //   },
// // });




// // import React, { useState } from 'react';
// // import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


// // export default function ProfilePage() {
// //   const [profilePhoto, setProfilePhoto] = useState(null);

// //   const handleChoosePhoto = async () => {
// //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// //     if (status !== 'granted') {
// //       alert('Sorry, we need camera roll permissions to make this work!');
// //       return;
// //     }
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 1,
// //     });
// //     if (!result.cancelled) {
// //       setProfilePhoto(result.uri);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity onPress={handleChoosePhoto}>
// //         {profilePhoto ? (
// //           <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
// //         ) : (
// //           <View style={styles.placeholder}>
// //             <Text style={styles.placeholderText}>Add a photo</Text>
// //           </View>
// //         )}
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

