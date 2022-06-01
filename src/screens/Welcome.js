import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Box,Image,TouchableOpacity ,Center} from 'native-base';

export default function Welcome({navigation}){

    return (
        <SafeAreaView>
            <Box margin={20}>
                <Center>
                <Image margin='60' alt='ds' style={styles.foxstyle} source={{ uri: 'https://github.com/howie960018/rentakimono/blob/master/assets/images/foxumbrella.png?raw=true' }}/>
           <Text  style={{ fontSize: 23,fontWeight:'bold' } } marginTop={3}  _dark={{ color: "#fff" }}
            _light={{ color: "black" }} >歡迎</Text>
                <Text margin={2} style={{ fontSize: 16 }} marginTop={3}>請挑選您有興趣的和服吧!</Text>
                </Center>
            </Box>
           

             
            <Button
            
                onPress={() => navigation.navigate('Gender')}
                title="和服"
                accessibilityLabel="Learn more about this purple button"
                color="#f194ff"
                borderRadius={22}
                width={200}
            ></Button>

            <Button
            margin={32}
                onPress={() => {}}
                title="配件"
                color="#f194ff"
                accessibilityLabel="Learn more about this purple button"
            />



            
        </SafeAreaView>
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
        marginBottom: 20
    }

});