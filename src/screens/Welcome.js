import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Box, Image, TouchableOpacity, Center, Pressable } from 'native-base';

export default function Welcome({ navigation }) {

    return (

        <Box backgroundColor={"#E0FDFF"} flex='1'>
            <Center>
                <Image margin='30' alt='ds' style={styles.foxstyle} source={{ uri: 'https://github.com/howie960018/rentakimono/blob/master/assets/images/foxumbrella.png?raw=true' }} />
                <Text style={{ fontSize: 23, fontWeight: 'bold' }} marginTop={3} _dark={{ color: "#fff" }}
                    _light={{ color: "black" }} >歡迎</Text>
                <View marginTop={10}>
                    <Text style={{ fontSize: 16 }}>請挑選您有興趣的和服吧!</Text>
                </View>


                <Pressable
                    marginTop={30}
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
                    marginTop={6}
                    onPress={() => navigation.navigate('others')}
                    color="#fff"

                >
                    <Image
                        source={{ uri: 'https:github.com/howie960018/rentakimono/blob/master/assets/images/accessories.png?raw=true' }}
                        alt="product"
                        style={styles.kimstyle}

                    />
                </Pressable>
            </Center>
        </Box>



    );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagestyle: {
        width: 188,
        height: 201,
        marginTop: 129,
        marginBottom: 40,
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