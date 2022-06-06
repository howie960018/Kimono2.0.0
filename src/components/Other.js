import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const Other = ({ product, navigation }) => {
  return (
    <Box>
    <Pressable 
    width={170} height={240}  marginLeft={3} margin={5}
    backgroundColor={product.bgc}
    borderRadius={10}
      onPress={() => navigation.navigate('OtherDetail', product)}

    >
      <AspectRatio  ratio={1}   >
        <Image
          width={170} height={240}  
        
          source={{ uri: product.image }}
          alt= "product"
        />            
      </AspectRatio>
    </Pressable>
    </Box>
  )};

export default Other;