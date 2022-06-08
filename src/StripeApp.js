import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import Welcome from "./screens/Welcome";
import { Center, Text ,Pressable, Box} from "native-base";
//ADD localhost address of your server
const API_URL = "http://localhost:3000";

const StripeApp = ({ navigation }) => {
  const [name, setName] = useState();
  const [cardDetails, setCardDetails] = useState();

  return (
    <View style={styles.container}>
      <Box _dark={{ bg: "#6C6C6C" }}
        _light={{ bg: "#E0FDFF" }}
        paddingTop={8}
        paddingBottom={20}
        >
      <Center>
        <Text bold fontSize={22}>請留下您的資料 </Text>
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
      <Center>
        <Box style={styles.btncrl}>
          <Button onPress={() => { alert("Payment Successful") }} title="送出" />
        </Box>
      </Center>
     
<Center>
<Pressable

marginTop={10}
onPress={() => { navigation.navigate('Welcome') }}
justifyContent={'center'} alignItems={"center"}
backgroundColor="#FFAAAA"
borderRadius={30}
width={200}
height={50}
><Text fontSize={22} color={'#fff'}>回首頁</Text></Pressable>
</Center>
    

</Box>
    </View>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  btncrl:{
    width:368,
    height:50,
    marginTop:10
  },
  container: {
    // flex: 1,
    justifyContent: "center",
   


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