import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Box, Image, TouchableOpacity, Center, Pressable,useColorMode,HStack } from 'native-base';
import LottieView from "lottie-react-native";

export default function Welcome({ navigation }) {
    const {colormode}=useColorMode();
    return (
        <Box style={styles.container} _dark={{ bg: "#6C6C6C" }} _light={{ bg: "#E0FDFF" }}>
                {/* <Image margin='30' alt='ds' style={styles.foxstyle} source={{ uri: 'https://github.com/howie960018/rentakimono/blob/master/assets/images/foxumbrella.png?raw=true' }} /> */}
                {/* 狐狸撐傘動畫 */}
                <Box marginTop={3}  h={180} w={180}>
                    <LottieView
                        source={require("../lottie/kasa.json")}
                        autoPlay
                    />
                </Box>
                <Box>
                    <Text style={styles.textitle}>歡迎</Text>
                </Box>
                {/* <Text style={{ fontSize: 23, fontWeight: 'bold' }} marginTop={3} _dark={{ color: "#fff" }}
                    _light={{ color: "black" }} >歡迎</Text> */}
                <View marginTop={10}>
                    <HStack>
                        <Text _dark={{ color: "blueGray.900", }}
                _light={{ color: "blueGray.50" }}  style={{ fontSize: 16 }}>請挑選您有興趣的和服吧!</Text>
                    </HStack>    
                </View>


                <Pressable
                    marginTop={18}
                    onPress={() => navigation.navigate('Gender')}
                    color="#fff"

                >
                    <Image
                        source={{ uri: 'https:github.com/howie960018/rentakimono/blob/master/assets/images/enterkimono.png?raw=true' }}
                        alt="product"
                        style={styles.kimstyle}
                    />
                </Pressable>

                <Pressable
                    marginTop={3}
                    onPress={() => navigation.navigate('others')}
                    color="#fff"

                >
                <Image
                    source={{ uri: 'https:github.com/howie960018/rentakimono/blob/master/assets/images/accessories.png?raw=true' }}
                    alt="product"
                    style={styles.kimstyle}
                />
                </Pressable>
        </Box>



    );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagestyle: {
        width: 188,
        height: 201,
        marginTop: 129,
        marginBottom: 40,
    },
    textitle:{
        fontSize: 23, 
        fontWeight: 'bold',
        marginTop:3
    },
    kimstyle: {
        width: 310,
        height: 115,
        backgroundColor: "#8EEBFF",
        borderRadius: 23,
        marginTop: 20
    },
    text: {
        marginTop: 10,
        marginBottom: 40,
        fontSize: 24

    },
    buttontxt: {
        color: '#fff',
        fontSize: 20,
        color: "#fff",
        marginLeft: 140,
        marginTop: 10
    },
    start: {
        fontSize: 16,
        width: 311,
        height: 47,
        backgroundColor: '#FFAAAA',
        borderRadius: 30

    },
    foxstyle: {
        width: 120,
        height: 150,
        marginBottom: 10
    },
    kimstyle: {
        width: 350,
        height: 115,
        borderRadius: 5,
        marginTop: 10
    },

});