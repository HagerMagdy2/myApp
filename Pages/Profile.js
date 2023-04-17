import { View, Text } from 'react-native'
import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { auth,db } from "firebase/firestore";
export default function Profile  ({navigation})  {
  const[name , setName]=useState('');
  const[email , setEmail]=useState('');
  const[password , setPassword]=useState('');
  const getUser =async()=>{
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    
  }
  return (

    <View>
      <Text>Profile</Text>
    </View>
  )
}

//export default Profile