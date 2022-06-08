import React, { useState } from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, HStack, VStack,Image, Button, Pressable, Row } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectA, selectB, selectC,selectD, selectProductName, selectPrice,increaseOne,decreaseOne,addToCart } from "../redux/counterSlice";
import { addFavorite, FavoritesContext, removeFavorite } from '../components/context/FavContext'
import { useContext,useLayoutEffect } from 'react';
import IconButton from '../components/ui/IconButton';

const KimDetail = ({ navigation, route }) => {
  

  const counterValue = useSelector(selectCounter);
  const NameOfProduct = useSelector(selectProductName);
  const Total = useSelector(selectPrice);

  
  const favoriteMealsCtx=useContext(FavoritesContext) ;
  const dispatch = useDispatch();

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

  const { 
    title,
    artist,
    price,
    bgc,
    image,
    description,
    component1,
    component2,
    component3,
    c1price,
    c2price,
    c3price
  } = route.params;

  

  return (
    <Center
      flex={1}
    >
      <ScrollView >
        <AspectRatio w="100%" ratio={1}>
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
           <Button borderRadius={0} width={70} onPress={() => dispatch(increaseOne(counterValue))}>
             <Text fontSize={40} color="white">+</Text>
           </Button>
           <Text fontSize={40} mt={1} color={"white"}>
           {counterValue}
         </Text>
           <Button borderRadius={0} width={70} onPress={() => dispatch(decreaseOne(counterValue))}>
             <Text fontSize={40} color="white">-</Text>
           </Button>
         </HStack>

         <Center>
            <Text fontSize={20} color={"#fff"}>請挑選尺寸</Text> 
            <Text fontSize={30} marginLeft={3} color={"#fff"}> {NameOfProduct}</Text>
          </Center>

          <HStack margin={3} space={3}>
            <Button borderRadius={10} width={70} onPress={() => dispatch(selectA(NameOfProduct))}>
              <Text fontSize={30} color="white">S</Text>
            </Button>
            <Button borderRadius={10} width={70} onPress={() => dispatch(selectB(counterValue))}>
              <Text fontSize={30} color="white">M</Text>
            </Button>
            <Button borderRadius={10} width={70} onPress={() => dispatch(selectC(counterValue))}>
              <Text fontSize={30} color="white">L</Text>
            </Button>
            <Button borderRadius={10} width={70} onPress={() => dispatch(selectD(counterValue))}>
              <Text fontSize={30} color="white">XL</Text>
            </Button>
          </HStack>
          <VStack alignContent={"center"} justifyContent={'center'}>
          
          </VStack>
          

        </Box>
        <Box _dark={{ bg: "#6C6C6C", borderColor: 'blueGray.500', borderWidth: 0.6 }}
          _light={{ bg: "#E0FDFF" }} paddingTop={10} paddingBottom={5} justifyContent={'center'} alignItems={'center'}>
          
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

          {/* 價格 */}
          <Box style={styles.pri}>

            {/* component1*/}
            <Box style={styles.priceline}>
              <Text marginTop={8} fontSize={26} >
                {component1}
              </Text >
              <Text marginTop={8} fontSize={26}>
                {c1price}x{counterValue}
              </Text>
            </Box>

            {/* component2 */}
            <Box style={styles.priceline}>
              <Text marginTop={8} fontSize={26} >
                {component2}
              </Text >
              <Text marginTop={8} fontSize={26}>
                {c2price}x{counterValue}
              </Text>
            </Box>

            {/* component3 */}
            <Box style={styles.priceline}>
              <Text marginTop={8} fontSize={26} >
                {component3}
              </Text >
              <Text marginTop={8} fontSize={26}>
                {c3price}x{counterValue}
              </Text>
            </Box>

            {/* 總價格 */}
            <Box style={styles.priceline}>
              <Text bold marginTop={10} fontSize={28} >
                Total
              </Text >
              <Text bold marginTop={10} fontSize={28}>
                ${' '}{price * counterValue}
              </Text>
      
            </Box>

          </Box>


          {/* <Text marginTop={10}  bold fontSize={28}>Total:{'  '}${' '}{price}x{counterValue}={price * counterValue}</Text> */}
          <Box alignItems={'center'} justifyContent={'center'}>
            <TouchableOpacity style={styles.start} onPress={() => { navigation.navigate('PickDate', route.params) }} >
              <Box style={styles.btntomid}>
              <Text style={styles.buttontxt} _dark={{ color: "blueGray.900", }}
                _light={{ color: "blueGray.50" }} >下一步</Text>
              </Box>
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
  pri:{
    width:310,
  },
  pricefz:{
    marginTop:10,
    fontSize:26
  },
  priceline:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  protext:{
    fontSize:18,
    fontWeight:"bold"
  },
  des:{
    width:310,
  },
  btntomid:{
    display:"flex",
    alignItems:"center"
  },
  counter: {
    backgroundColor: "#66B0B5",
    justifyContent: 'center',
    alignItems: 'center'
  },
  pushtop:{
    width:310,
    marginTop: 10
  },
  start: {
    fontSize: 16,
    width: 180,
    height: 47,
    backgroundColor: '#FFAAAA',
    borderRadius: 30,
    marginTop: 35,
    marginLeft: 23,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttontxt: {
    fontSize: 20
  },

})