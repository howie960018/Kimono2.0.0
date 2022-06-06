import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Box, Text } from 'native-base';


export default function WelcomeScreen({ navigation }) {
    return (
        <Box style={styles.container} _dark={{ bg: "#6C6C6C" }}
            _light={{ bg: "#E0FDFF" }}>
            <Image style={styles.imagestyle} source={require('../../assets/foxlogo.png')} />
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

        fontSize: 18,
        marginBottom: 39,
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
        width: 112,
        height: 120,
        marginBottom: 20
    }

});
