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
                <Box backgroundColor={'#E0FDFF'} >
                    <VStack>
                        <Center>
                            <Text margin={2} fontSize={20} >你的選擇:  </Text>
                            <Text marginTop={5} fontSize={27} fontWeight={"bold"} >{route.params.title} </Text>
                            <Image
                                backgroundColor={'#ffffff'}
                                borderRadius={20}
                                source={{ uri: route.params.image }}
                                alt='deff'
                                width={250}
                                height={350}
                            />
                        </Center>

                    </VStack>


                    <Box>

                        <HStack space={3}>
                            <Box backgroundColor={'#ffffff'} borderRadius={20} width={70} margin={5} padding={2}>
                                <Text>尺寸:</Text>
                                <Text margin='3' fontSize={24} color={"black"}>
                                    {NameOfProduct}
                                </Text>
                            </Box>
                            <Box backgroundColor={'#ffffff'} borderRadius={20} width={200} margin={5} padding={2} justifyContent={'center'} alignItems={'center'}>

                                <Text fontSize={20} >{route.params.artist} </Text>
                            </Box>
                          
                        </HStack>
                    </Box>
                    <HStack>
                    <Text marginLeft='5' fontSize={20}>店家地址: </Text>
                    <Text margin={3} marginLeft={8} fontSize={30}>總計:{route.params.price * counterValue}元</Text>
                    </HStack>
                    
                    <Box backgroundColor={'#ffffff'} borderRadius={20} marginLeft={3} marginRight={3}>

                        <Text margin='5' fontSize={20}>台北市大安區和平東路二段134號 </Text>
                    </Box>
                    {/* <Box>
                    <Text>付款方式</Text>
                </Box> */}
                    <Box>
                        <Center>


                            <Pressable

                                marginTop={10}
                                onPress={() => navigation.navigate('StripeApp')}
                                justifyContent={'center'} alignItems={"center"}
                                backgroundColor="#FFAAAA"
                                borderRadius={12}
                                width={200}
                                height={40}
                            ><Text fontSize={16} color={'#fff'}>確認預約完成</Text></Pressable>
                        </Center>
                    </Box>





                </Box>




            </ScrollView>
        </Box>
    );

}

export default Payment;