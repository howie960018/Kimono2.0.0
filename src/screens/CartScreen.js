import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Image,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useDispatch, useSelector } from "react-redux";
  import {
    increment,
    decrement,
    clear,
    removeItem,
  } from "../redux/features/cart/cartSlice";
  import { cartTotalPriceSelector } from "../redux/Selectors";

  
  import { Ionicons } from "@expo/vector-icons";
  
  
  const CartContainer = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const totalPrice = useSelector(cartTotalPriceSelector);
  
    const AlertItem = () => {
      Alert.alert(
        "Are you sure you want to clear the cart?",
        "",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => dispatch(clear()) },
        ],
        { cancelable: false }
      );
    };
  
    const renderStoreItems = ({ item }) => {
      return (
        <View >
          <View >
            <Image  source={{ uri: item.image }} />
          </View>
          <View >
            <Text >{item.title}</Text>
            <Text >
              ${item.quantity * item.price}
            </Text>
            <View >
              <View >
                <TouchableOpacity
                  onPress={() => {
                    if (item.quantity === 1) {
                      dispatch(removeItem(item.id));
  
                      console.log("removed");
                      return;
                    } else {
                      dispatch(decrement(item.id));
                    }
                  }}
                >
                  <Ionicons name="md-remove" size={24} color="black" />
                </TouchableOpacity>
                <Text >{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(increment(item.id));
                  }}
                >
                  <Ionicons name="md-add" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View >
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeItem(item.id));
                  }}
                
                >
                  <Ionicons name="md-trash" size={25} color="black" />
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    };
  
    return (
      <View>
        <FlatList
          data={cart}
          renderItem={renderStoreItems}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View
              
            >
              <Text >My Cart</Text>
              <TouchableOpacity onPress={AlertItem}>
                <Text >Clear cart</Text>
              </TouchableOpacity>
            </View>
          )}
          ListFooterComponent={() => {
            return (
              <View>
                <View>
                  {cart.length === 0 ? (
                    <Text >Your cart is empty</Text>
                  ) : (
                    <View >
                      <Text >
                        Total: {totalPrice}
                      </Text>
  
                      
                      <Button
                        onPress={() => goBack()}
                        title="Continue Shopping"
                      />
                    </View>
                  )}
                </View>
                <View />
              </View>
            );
          }}
        />
      </View>
    );
  };
  
  const CartScreen = ({ navigation: { goBack } }) => {
    return (
      <SafeAreaView>
        <CartContainer />
      </SafeAreaView>
    );
  };
  
  export default CartScreen;
  
 