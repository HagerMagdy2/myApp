import { StyleSheet, Text, View, Pressable, Image, ScrollView,FlatList } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
// //import { useDispatch, useSelector } from "react-redux";
// // import {
// //   addToCart,
// //   decrementQuantity,
// //   incrementQuantity,
// // } from "../CartReducer";
// // import { decrementQty, incrementQty } from "../ProductReducer";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   decrementQuantity,
//   incrementQuantity,
// } from "./CartReducer"
// import { decrementQty, incrementQty } from "../Pages/ProductReducer";

// const Items = ({ item }) => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.cart);
//   const addItemToCart = () => {
//     dispatch(addToCart(item)); // cart
//     dispatch(incrementQty(item)); // product
//   };
 const Items = () => {
  const [cart,setCart] = useState([]);
 // console.log("cart items",cart)
    const services = [
        {
          id: "0",
          image: "https://th.bing.com/th/id/OIP.erlkOpnU4Octt686S5tw0wHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7",
          name: "Iced",
         
        },
        {
          id: "11",
          image: "https://th.bing.com/th/id/OIP.eEEgUz95vp0o5d9kzvdWUgAAAA?w=221&h=183&c=7&r=0&o=5&pid=1.7",
          name: "Hot"
        },
        {
          id: "12",
          image: "https://th.bing.com/th/id/OIP.eEEgUz95vp0o5d9kzvdWUgAAAA?w=221&h=183&c=7&r=0&o=5&pid=1.7",
          name: "Tea",
         
        },
        {
          id: "13",
          image: "https://th.bing.com/th/id/OIP.eEEgUz95vp0o5d9kzvdWUgAAAA?w=221&h=183&c=7&r=0&o=5&pid=1.7",
          name: "Coffee",
        },
        {
            id: "14",
            image: "https://th.bing.com/th/id/OIP.eEEgUz95vp0o5d9kzvdWUgAAAA?w=221&h=183&c=7&r=0&o=5&pid=1.7",
            name: "Hot Choclate",
           
          },
       
      ];
    const servicess = [
        {
          id: "0",
          image: "https://i.pinimg.com/236x/6e/55/5c/6e555c660fa1e3694c7571848c6b10b2.jpg",
          name: "Tea",
          quantity: 0,
          price: 10,
        },
        {
          id: "11",
          image: "https://i.pinimg.com/236x/cc/1c/52/cc1c52cebabadbd9843d5cb6009a8e3e.jpg",
          name: "Boba Tea",
          quantity: 0,
          price: 10,
        },
        {
          id: "12",
          image: "https://i.pinimg.com/236x/39/35/d7/3935d7a96e33f58d5ff217963304ce52.jpg",
          name: "Iced Coffee",
          quantity: 0,
          price: 10,
        },
        {
          id: "13",
          image: "https://i.pinimg.com/236x/ec/6e/92/ec6e92cb2f691487c6e157061a03767c.jpg",
          name: "Espresso",
          quantity: 0,
          price: 10,
        },
        {
          id: "14",
          image: "https://i.pinimg.com/236x/e0/13/cd/e013cd01edf6ab62c76b72016dcb905a.jpg",
          name: "Latte",
          quantity: 0,
          price: 10,
        },
        {
          id: "15",
          image: "https://i.pinimg.com/236x/2f/15/bf/2f15bf620628090eedcece52dd95ad85.jpg",
          name: "Iced Cortado",
          quantity: 0,
          price: 10,
        },
        {
          id: "16",
          image: "https://i.pinimg.com/236x/b4/94/67/b494678e5b41483ad9249fd5c4f2c4e1.jpg",
          name: "Iced Americano",
          quantity: 0,
          price: 10,
        },
        {
            id: "17",
            image: "https://i.pinimg.com/236x/64/06/d6/6406d6ea581d7e87f22bff8f10a92944.jpg",
            name: "Iced Mocha",
            quantity: 0,
            price: 10,
          },
          {
            id: "18",
            image: "https://i.pinimg.com/236x/cd/b3/17/cdb31751c992a9b79d554493851804f4.jpg",
            name: "Iced Cappuccino",
            quantity: 0,
            price: 10,
          },
          {
            id: "19",
            image: "https://i.pinimg.com/236x/9d/ce/02/9dce02095228f480761ce2da8931b11b.jpg",
            name: "Iced Flat White",
            quantity: 0,
            price: 10,
          },
          {
            id: "20",
            image: "https://i.pinimg.com/236x/0a/8c/1f/0a8c1f36f4a663dae88b6c2436e87b3b.jpg",
            name: "Iced Latte",
            quantity: 0,
            price: 10,
          },
          {
            id: "21",
            image: "https://i.pinimg.com/236x/43/f0/45/43f0458fc14f5be0a2153301938d30f4.jpg",
            name: "Strawberries & Cream Frappe",
            quantity: 0,
            price: 10,
          },
      ];
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.cart);
//   const addItemToCart = () => {
//     dispatch(addToCart(item)); // cart
//     dispatch(incrementQty(item)); // product
//   };
  return (
    <View style={styles.containrt}>


        <View>
          <Image
            style={{ width: 580, height: 450}}
            source={require("../assets/co1.jpg")}
          />
        </View>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>

{services.map((service,index) => (
                <Pressable style={{margin:10,backgroundColor:"white",padding:20,borderRadius:7}} key={index}>
                    <Image source={{uri:service.image}} style={{width:70,height:70}}/>

                    <Text style={{textAlign:"center",marginTop:10}}>{service.name}</Text>
                </Pressable>
            ))}



</ScrollView>



        <ScrollView showsVerticalScrollIndicator={false}>
          
        {servicess.map((item,index) => (
      <Pressable
        style={{
          backgroundColor: "#F8F8F8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
       
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: item.image }}
          />
        </View>

        <View>
          <Text
            style={{
              width: 83,
              fontSize: 24,
              fontWeight: "500",
              marginBottom: 7,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ width: 60, color: "gray", fontSize: 20 }}>
            ${item.price}
          </Text>
        </View>

          {/* <Pressable  style={{ width: 80 }}>
            <Text
              style={{
                borderColor: "gray",
                borderRadius: 4,
                borderWidth: 0.8,
                marginVertical: 10,
                color: "#088F8F",
                textAlign: "center",
                padding: 5,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Add
            </Text>
          </Pressable> */}

<View>
            {/* <Text style={{ fontWeight: "bold" }}>{item.name}</Text> */}
            {cart.includes(item) ? (
               < TouchableOpacity onPress={() => setCart(cart.filter((x) => x.id !== item.id))}>
               <Text
                 style={{
                   borderColor: "gray",
                   borderWidth: 1,
                   marginVertical: 10,
                   padding: 5,
                 }}
               >
                REMOVE FROM CART
               </Text>
             </TouchableOpacity>
            ):(
              <TouchableOpacity onPress={() => setCart([...cart,item])}>
              <Text
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 5,
                }}
              >
                ADD TO CART
              </Text>
            </TouchableOpacity>
            )}
           
          </View>
        
         
      </Pressable>
      ))}
      
      </ScrollView>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
containrt:{
backgroundColor:"#F4F1EF"
},

});