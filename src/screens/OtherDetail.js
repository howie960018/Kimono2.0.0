import React, { useState } from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, HStack, Image, Button, c } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { selectOtherCounter,increaseOtherOne,decreaseOtherOne, selectProductName, selectPrice,increaseOne,decreaseOne } from "../redux/counterSlice";

const KimDetail = ({ navigation, route }) => {
  
  const otherValue = useSelector(selectOtherCounter);
  const NameOfProduct = useSelector(selectProductName);
  const Total = useSelector(selectPrice);

  // Define a dispatch to send actions
  const dispatch = useDispatch();

  const { title,
    artist,
    price,
    bgc,
    image,
    description,
    component1,
    c1price,
  } = route.params;

  return (
    <Center
      flex={1}
    >
      <ScrollView >
        <AspectRatio w="100%" ratio={1} >
          <Image
          
            background={bgc}
            source={{ uri: image }}
            alt='Image'
          />
        </AspectRatio>
        <Box style={styles.counter} >
          <Box alignItems={'center'} justifyContent={'center'} >
            <Text marginTop={3} marginBottom={1} fontSize={15} color={'white'} >-{artist} -</Text>
            <Text fontSize={24} color={'white'}>{title}</Text>
          </Box>
         
           <HStack space={20}>
           <Button borderRadius={0} width={70} onPress={() => dispatch(increaseOtherOne(otherValue))}>
             <Text fontSize={40} color="white">+</Text>
           </Button>
           <Text fontSize={40} mt={1} color={"white"}>
           {otherValue}
         </Text>
           <Button borderRadius={0} width={70} onPress={() => dispatch(decreaseOtherOne(otherValue))}>
             <Text fontSize={40} color="white">-</Text>
           </Button>
         </HStack>

        </Box>
        <Box _dark={{ bg: "#6C6C6C", borderColor: 'blueGray.500', borderWidth: 0.6 }}
          _light={{ bg: "#E0FDFF" }} justifyContent={'center'} alignItems={'center'}>

          <Text marginTop={10} marginLeft={25} >
            <Text bold fontSize={16} marginTop={5} >產品說明 </Text>
          </Text>
          <Box marginRight={4} >
            <Text marginTop={10} marginLeft={25} fontSize={16} >
              {description}
            </Text>
          </Box>
          <Text marginTop={10} marginLeft={26} fontSize={26} >
            {component1}{'                  '}{c1price}x{otherValue}
          </Text>
    



          <Text marginTop={10} marginLeft={25} bold fontSize={28}>Total:{'  '}${' '}{price}x{otherValue}={price * otherValue}</Text>
          <Box alignItems={'center'} justifyContent={'center'}>
            <TouchableOpacity style={styles.start} onPress={() => { navigation.navigate('PickDate', route.params) }} >
              <Text style={styles.buttontxt} _dark={{ color: "blueGray.900", }}
                _light={{ color: "blueGray.50" }} >下一步</Text>
            </TouchableOpacity>
          </Box>

        </Box>
      </ScrollView>
    </Center>

  );
}

export default KimDetail;

const styles = StyleSheet.create({
  img: {

    width: 390,
    height: 423,

  },
  counter: {

    backgroundColor: "#66B0B5",
    justifyContent: 'center',
    alignItems: 'center'


  },

  start: {
    fontSize: 16,
    width: 311,
    height: 47,
    backgroundColor: '#FFAAAA',
    borderRadius: 30,
    marginTop: 35,
    marginLeft: 23,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttontxt: {

    fontSize: 16

  },

})