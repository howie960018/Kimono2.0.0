import React, { useState,useContext ,useLayoutEffect} from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, HStack, Image, Button, c } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { FavoritesContext } from '../components/context/FavContext';
import { selectOtherCounter,increaseOtherOne,decreaseOtherOne, selectProductName, selectPrice,increaseOne,decreaseOne } from "../redux/counterSlice";
import IconButton from '../components/ui/IconButton';

const KimDetail = ({ navigation, route }) => {
  
  const otherValue = useSelector(selectOtherCounter);
  const NameOfProduct = useSelector(selectProductName);
  const Total = useSelector(selectPrice);


   
  const favoriteMealsCtx=useContext(FavoritesContext) ;


  const mealId = route.params.id;
  

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
      
    } else {
       favoriteMealsCtx.addFavorite(mealId);
      
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            size={25}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
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
        <Box  _dark={{ bg: "#6C6C6C", borderColor: 'blueGray.500', borderWidth: 0.6 }}
          _light={{ bg: "#E0FDFF" }} paddingTop={10} paddingBottom={5} justifyContent={'center'} alignItems={'center'}>

          {/* <Text marginTop={10} marginLeft={25} >
            <Text bold fontSize={16} marginTop={5} >產品說明 </Text>
          </Text> */}

          {/* 產品說明 */}
          <Box style={styles.pushtop}>
            <Text style={styles.protext} >產品說明 </Text>
          </Box>

          {/* 說明文字 */}
          <Box style={styles.des} >
            <Text marginTop={8}  fontSize={18} >
              {description}
            </Text>
          </Box>
          
          <Box style={styles.pri}>
            {/* component1*/}
            <Box style={styles.priceline}>
              <Text marginTop={8} fontSize={26} >
                {component1}
              </Text >
              <Text marginTop={8} fontSize={26}>
                {c1price}x{otherValue}
              </Text>
            </Box>

            {/* 總價格 */}
            <Box style={styles.priceline}>
              <Text bold marginTop={10} fontSize={28} >
                Total
              </Text >
              <Text bold marginTop={10} fontSize={28}>
                ${' '}{price * otherValue}
              </Text>
            </Box>

          </Box>
    
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
  protext:{
    fontSize:18,
    fontWeight:"bold"
  },
  pushtop:{
    width:310,
    marginTop: 10
  },
  pri:{
    width:310,
  },
  priceline:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  des:{
    width:310,
  },
  counter: {

    backgroundColor: "#66B0B5",
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30


  },

  start: {
    fontSize: 16,
    width: 180,
    height: 50,
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