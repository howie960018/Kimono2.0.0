import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const Card = ({ product, navigation }) => {
  return (
    
     <Box>
        <Pressable 
        width={150} height={200}  marginLeft={3} margin={5} 
        backgroundColor={product.bgc}
        borderRadius={10}
          onPress={() => navigation.navigate('Detail', product)}

        >
          <AspectRatio  ratio={1}   >
            <Image
              width={150} height={200}  
            
              source={{ uri: product.image }}
              alt= "product"
            />            
          </AspectRatio>
        </Pressable>
        </Box>
   
  )};

export default Card;
