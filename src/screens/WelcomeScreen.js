import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Box, Text,useColorMode } from 'native-base';
import LottieView from "lottie-react-native";


export default function WelcomeScreen({ navigation }) {
    return (
        <Box style={styles.container} _dark={{ bg: "#6C6C6C" }} 
            _light={{ bg: "#E0FDFF" }}>
            {/* 狐狸端坐動畫 */}
            <Box h={330} w={330}>
                <LottieView
                    source={require("../lottie/sitfox.json")}
                    autoPlay
                />
            </Box>
            {/* <Image style={styles.imagestyle} source={require('../../assets/foxlogo.png')} /> */}
            <Box><Text style={styles.text} >以簡單的步驟來租借和服吧!</Text></Box>

            <TouchableOpacity style={styles.start} onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.buttontxt}>開始</Text>
            </TouchableOpacity>

            {/* <StatusBar style="auto" /> */}
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
    },
    imagestyle: {
        width: 188,
        height: 201,
        margin: 20
    },
    kimstyle: {
        width: 310,
        height: 149,
        backgroundColor: "#8EEBFF",
        borderRadius: 23,
        marginTop: 20
    },
    kimstyle2: {
        width: 310,
        height: 149,
        backgroundColor: "#FFE4E4",
        borderRadius: 23,
        marginTop: 20
    },

    text: {
        fontSize: 16,
        marginBottom: 39,
    },
    buttontxt: {
        color: '#fff',
        fontSize: 20
        // marginLeft:30,
        // marginTop: 15
    },
    start: {
        // fontSize: 16,
        width: 180,
        height: 47,
        backgroundColor: '#FFAAAA',
        borderRadius: 30,
        alignItems:"center",
        justifyContent:"center"
    },
    foxstyle: {
        width: 112,
        height: 120,
        marginBottom: 20
    }

});
