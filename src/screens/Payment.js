import { Center, Box, Text, HStack, Image, Button, VStack, ScrollView, usePropsResolutionTest } from "native-base";
import * as React from "react";
import { View, StyleSheet, StatusBar, SafeAreaView, Pressable } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectA, selectB, selectC, selectProductName, selectPrice, selectDate } from "../redux/counterSlice";
import StripeApp from "../StripeApp";

function Payment({ navigation, route }) {


    const counterValue = useSelector(selectCounter);
    const NameOfProduct = useSelector(selectProductName);
    const Total = useSelector(selectPrice);
    const PickDate = useSelector(selectDate);

    // Define a dispatch to send actions
    const dispatch = useDispatch();

    return (
        <Box flex={1}>
            <ScrollView>
                <Box flex={1}
                _dark={{ bg: "#6C6C6C" }}
                _light={{ bg: "#E0FDFF" }}>

                    <Text bold marginTop={8} marginLeft={8} fontSize={22}>您的選擇</Text>
                    <VStack>
                        <Center>
                            <Image
                                marginTop={8}
                                backgroundColor={'#f7f6d7'}
                                borderRadius={20}
                                source={{ uri: route.params.image }}
                                alt='deff'
                                width={500}
                                height={500}
                            />
                            <Text marginTop={5} fontSize={27} fontWeight={"bold"} >{route.params.title} </Text>
                        </Center>

                    </VStack>


                    <Box>

                        {/* 框框 */}
                        <HStack space={3}>
                            <Box 
                                _dark={{ bg: "#8c8c8c" }}
                                _light={{ bg: '#ffffff' }} 
                                borderRadius={20} width={140} height={50} margin={5} padding={2}>
                                <Text marginLeft={3} fontSize={20}>尺寸 :{" "} {NameOfProduct}</Text>
                            </Box>
                            <Box 
                                _dark={{ bg: "#8c8c8c" }}
                                _light={{ bg: '#ffffff' }} 
                                borderRadius={20} width={182} height={50} margin={5} padding={2}>
                                <Text marginLeft={3} fontSize={20}>總計 :{"  NT$"} {route.params.price * counterValue}</Text>
                            </Box>
                            {/* <Box backgroundColor={'#ffffff'} borderRadius={20} width={200} margin={5} padding={2} justifyContent={'center'} alignItems={'center'}>

                                <Text fontSize={20} >{route.params.artist} </Text>
                            </Box> */}
                          
                        </HStack>
                    </Box>
                    <HStack>
                    <Text marginTop={2} marginLeft={8} fontSize={20}>店家地址: </Text>
                    </HStack>
                    
                    <Box flex={1}
                    _dark={{ bg: "#8c8c8c" }}
                    _light={{ bg: "#ffffff" }}
                    borderRadius={20} marginLeft={6} marginRight={3} marginTop={4}
                    width={365}>

                        <Text margin='5' fontSize={20}>台北市大安區和平東路二段134號 </Text>
                    </Box>
                    {/* <Box>
                    <Text>付款方式</Text>
                </Box> */}
                    <Box marginTop={8} marginBottom={6}>
                        <Center>


                            <Pressable  
                                onPress={() => navigation.navigate('StripeApp')}
                                justifyContent={'center'} alignItems={"center"}
                                backgroundColor="#FFAAAA"
                                borderRadius={30}
                                width={200}
                                height={50}
                                
                            ><Text fontSize={22} color={'#fff'}>確認</Text></Pressable>
                        </Center>
                    </Box>





                </Box>




            </ScrollView>
        </Box>
    );

}

export default Payment;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bx:{
        marginTop:20,
        width:150,
    },
    parctrl:{
        display:"flex",
        flexDirection:"row"
    },
    datebtn:{
        width:180,
        height:45
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    dateText: {
        margin: 25,
        fontSize: 18,
    },



    MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',

    },

    text: {
        fontSize: 25,
        padding: 3,
        marginBottom: 50,
        marginTop: 30,
        textAlign: 'center'
    }, 

});