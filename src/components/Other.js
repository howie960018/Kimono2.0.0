import React from "react";
import { Box,Center, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const Other = ({ product, navigation }) => {
  return (
    <Center>
      <Box>
      <Pressable 
    width={150} height={180}  marginLeft={3} margin={5}
    backgroundColor={product.bgc}
    borderRadius={10}
      onPress={() => navigation.navigate('OtherDetail', product)}

    >
      <AspectRatio  ratio={1}   >
        <Image
          width={150} height={180}  
        justifyContent={'center'}
        alignContent={'center'}
          source={{ uri: product.image }}
          alt= "product"
        />            
      </AspectRatio>
    </Pressable>
      </Box>
    </Center>
  )};

export default Other;