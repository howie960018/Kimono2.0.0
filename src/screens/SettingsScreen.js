import React from "react";
import { Box, Center, Switch, HStack,VStack,Pressable, Text, useColorMode, PresenceTransition } from 'native-base';
import AccountScreen from "./AccountScreen";
import { Ionicons, FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsScreen = ({navigation}) => {
    
   const { colorMode, toggleColorMode } = useColorMode();

   return (
      <Box
         flex={1}
         _dark={{ bg: "#6C6C6C" }}
         _light={{ bg: "#E0FDFF" }}
         
      >
         
         <HStack marginLeft={9} marginTop={10}>
            <MaterialCommunityIcons  size={22} marginRight={5} name="account"/>
         <Text fontSize="20"  marginLeft={3}>我的帳號</Text>
         </HStack>
         <Center
             width="80%"
            mt="2" px="2" py="4"
            _dark={{ bg: "#878787", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "#8CC3F6" }}
            borderRadius="20"
            alignSelf="center"
            onPress={()=>{navigation.navigate('AccountScreen')}}
         >
            <HStack space={8}  >
               <Text fontSize="20" color={"#fff"} marginTop={1}>VIP</Text>
               
            </HStack>
         </Center>

         <HStack marginLeft={9} marginTop={23}>
         <FontAwesome   size={22} name="paint-brush" marginRight={5}/>
         <Text fontSize="20" marginLeft={3}>色彩主題</Text>
         </HStack>
         <Center
         
             width="80%"
            mt="2" px="2" py="4"
            _dark={{ bg: "#878787", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "#34CEC5" }}
            borderRadius="20"
            alignSelf="center"
         >
            <HStack space={8}  >
               <Text fontSize="20" color={"#fff"} marginTop={1}>{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
               <Switch
                  name="light Mode"
                  isChecked={colorMode === "light"}
                  onToggle={toggleColorMode}
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               />
            </HStack>
         </Center>
      </Box>

   );

  
};

export default SettingsScreen;
