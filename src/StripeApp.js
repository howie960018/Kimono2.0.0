import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import Welcome from "./screens/Welcome";
import { Center, Text ,Pressable} from "native-base";
//ADD localhost address of your server
const API_URL = "http://localhost:3000";

const StripeApp = ({ navigation }) => {
  const [name, setName] = useState();
  const [cardDetails, setCardDetails] = useState();

  return (
    <View style={styles.container}>
      <Center>
        <Text fontSize={20} marginTop={-100}>請留下您的資料 </Text>
      </Center>

      <TextInput
        autoCapitalize="none"
        placeholder="名字"
        keyboardType="email-address"
        onChange={value => setName(value.nativeEvent.text)}
        style={styles.input}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="手機號碼"
        keyboardType="email-address"
        onChange={value => setName(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={cardDetails => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={() => { alert("Payment Successful") }} title="送出" />
     
<Center>
<Pressable

marginTop={10}
onPress={() => { navigation.navigate('Welcome') }}
justifyContent={'center'} alignItems={"center"}
backgroundColor="#FFAAAA"
borderRadius={12}
width={80}
height={60}
><Text fontSize={18} color={'#fff'}>回首頁</Text></Pressable>
</Center>
    


    </View>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E0FDFF"


  },
  input: {
    backgroundColor: "#efefefef",
    margin: 20,
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
    margin: 20,
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
    margin: 20,
  },
});