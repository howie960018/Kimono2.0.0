import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, Center } from "native-base"

const Date = ({ date }) => {
  return (
   
     <Center>
        
       <Text margin={4} fontSize={20}>預約日期:{date}</Text>
    </Center>
   
  )};

export default Date;
