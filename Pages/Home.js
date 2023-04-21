import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text } from "react-native";
import { useState } from "react";
import moment from 'moment';
import * as ImagePicker from 'expo-image-picker';

export default function Home({navigation}) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleAddToCart('Item 1')}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <Text style={styles.cartText}>Cart Items: {cartItems.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
  // const [birthday, setBirthday] = useState("");
  // const [profilePhoto, setProfilePhoto] = useState(null);

  // const handleChoosePhoto = async () => {
  //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (status !== 'granted') {
  //     alert('Sorry, we need camera roll permissions to make this work!');
  //     return;
  //   }
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   if (!result.cancelled) {
  //     setProfilePhoto(result.uri);
  //   }
  // };
  // const handleSaveBirthday = () => {
  //   const isValidDate = moment(birthday,'MM/DD/YYYY' ,true).isValid();
  //   if (isValidDate) {
  //     // Save the birthday to your app's state or database
  //     console.log('Birthday saved:', birthday);
  //   } else {
  //     // Show an error message or alert the user to enter a valid date
  //     console.log('Invalid date entered');
  //   }
  // };

  // return (
  //   <View style={styles.container}>
  //     <TouchableOpacity onPress={handleChoosePhoto}>
  //       {profilePhoto ? (
  //         <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
  //       ) : (
  //         <View style={styles.placeholder}>
  //           <Text style={styles.placeholderText}>Add a photo</Text>
  //         </View>
  //       )}
  //     </TouchableOpacity>
  //   </View>
    // <View style={styles.container}>
    //   <Text style={styles.label}>Enter your birthday:</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="MM/DD/YYYY"
    //     value={birthday}
    //     onChangeText={setBirthday}
    //   />
    //   <TouchableOpacity style={styles.button} onPress={handleSaveBirthday}>
    //     <Text style={styles.buttonText}>Save</Text>
    //   </TouchableOpacity>
    // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
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
//   profilePhoto: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//   },
//   placeholder: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: '#eee',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   placeholderText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#aaa',
//   },
// });




// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


// export default function ProfilePage() {
//   const [profilePhoto, setProfilePhoto] = useState(null);

//   const handleChoosePhoto = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       alert('Sorry, we need camera roll permissions to make this work!');
//       return;
//     }
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     if (!result.cancelled) {
//       setProfilePhoto(result.uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleChoosePhoto}>
//         {profilePhoto ? (
//           <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
//         ) : (
//           <View style={styles.placeholder}>
//             <Text style={styles.placeholderText}>Add a photo</Text>
//           </View>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

