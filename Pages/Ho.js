import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
  Alert,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ScreenStackHeaderRightView } from "react-native-screens";
import Services from "../components/Services";
import Items from "../components/Items";

export default function Ho({ navigation }) {
  // const [items,setItems] = useState([]);
  // const product = useSelector((state) => state.product.product);

  function RenderHeader() {
    return (
      <View style={{ padding: 100 }}>
        <Text style={{ fontSize: 1000, fontWeight: "bold" }}>Main</Text>
        <Text style={{ fontSize: 500, fontWeight: "bold" }}>Catigories</Text>
      </View>
    );
  }
  return (
    // <Services />
    <Items />

    // {servicess.map((item, index) => (
    //   <DressItem item={item} key={index} />
    // ))}
    // <DressItem item={item} key={index}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    //justifyContent: "center",
  },
  input: {
    width: "80%",
    //height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    alignContent: "center",
    position: "absolute",
    top: 150,
    left: 50,
    Color: "#fff",
  },
  searchicons: {
    right: -50,
    top: 0,
  },
});
