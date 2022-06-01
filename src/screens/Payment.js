import { Center, Box, Text, HStack, Image, Button } from "native-base";
import * as React from "react";
import { View, StyleSheet, StatusBar, SafeAreaView, Pressable } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectA, selectB, selectC, selectProductName, selectPrice, selectDate } from "../redux/counterSlice";
import Date from "../components/Date";

function Payment({ navigation, route}) {


    const counterValue = useSelector(selectCounter);
    const NameOfProduct = useSelector(selectProductName);
    const Total = useSelector(selectPrice);
    const PickDate=useSelector(selectDate);

    // Define a dispatch to send actions
    const dispatch = useDispatch();

    return (
        <SafeAreaView  >

            <Box backgroundColor={'#E0FDFF'} height={'100%'}>
                <HStack>
                    <Text margin={5} fontSize={20} >你的選擇:  </Text>
                    <Text margin={5} fontSize={27} fontWeight={"bold"} >{route.params.title} </Text>
                    <Image
                        backgroundColor={'#ffffff'}
                        borderBottomRadius={10}
                        source={{ uri: route.params.image }}
                        alt='deff'
                        width={70}
                        height={120}
                    />
                </HStack>


                <Box>

                    <HStack space={3}>
                        <Box backgroundColor={'#ffffff'} borderRadius={20} width={70} margin={5} padding={2}>
                            <Text margin='3' fontSize={24} color={"black"}>
                                {NameOfProduct}
                            </Text>
                        </Box>
                        <Box backgroundColor={'#ffffff'} borderRadius={20} width={200} margin={5} padding={2} justifyContent={'center'} alignItems={'center'}>

                            <Text fontSize={20} >{route.params.artist} </Text>
                        </Box>
                        {/* <Text margin='5' fontSize={20}>${route.params.price * counterValue} </Text> */}
                    </HStack>
                </Box>
                <Text marginLeft='5' fontSize={20}>店家地址: </Text>
                <Box backgroundColor={'#ffffff'} borderRadius={20} marginLeft={3} marginRight={3}>

                    <Text margin='5' fontSize={20}>台北市大安區和平東路二段134號 </Text>
                </Box>
                <Box>
                    <Center>
                    <Text margin={4} fontSize={20}>預約日期:{PickDate}</Text>
                        
                        <Button
                            onPress={() => navigation.navigate('Welcome')}
                            title="確認預約完成"
                            color="blue"
                            accessibilityLabel="Learn more about this purple button"
                            borderRadius={12}
                            width={200}
                        >確認預約完成</Button>
                    </Center>
                </Box>





            </Box>





        </SafeAreaView>
    );

}

export default Payment;