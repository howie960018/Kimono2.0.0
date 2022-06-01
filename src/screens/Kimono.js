import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

function Kimono({navigation}){

    return (
        <SafeAreaView >
            <Text>Kimono</Text>
            <Button
                onPress={() => navigation.navigate('Gender')}
                title="Kimono"
                color="#f194ff"
                accessibilityLabel="Learn more about this purple button"
            />
        </SafeAreaView>
    );

}

export  default Kimono;