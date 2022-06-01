import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const Card = ({ product, navigation }) => {
  return (
    <Box width={150} height={150}  marginLeft={3} margin={5}  borderRadius={3} shadow={6}>
   
     <Box>
        <Pressable 
          onPress={() => navigation.navigate('Detail', product)}
        >
          <AspectRatio  ratio={1}   >
            <Image
              backgroundColor={product.bgc}
              borderBottomRadius={10}
              source={{ uri: product.image }}
              alt= "product"
            />            
          </AspectRatio>
        </Pressable>
        </Box>
    </Box>
  )};

export default Card;
