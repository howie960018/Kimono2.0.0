import React, { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Box, Center, NativeBaseProvider, useColorMode, Button, Actionsheet, useDisclose, Icon } from "native-base";

import kimdata from '../data/kimono.json';
import ProductList from "../components/ProductList";

const Gender = ({ navigation }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);


    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (


                <Center >
                    
                    <ProductList
                        list={kimdata.female}
                        navigation={navigation}
                    />
                </Center>

            )
        } else {
            return (
                <Center >
                
                <ProductList
                    list={kimdata.male}
                    navigation={navigation}
                />
            </Center>

            )
        }
    }
    return (
        <NativeBaseProvider>

            <Box backgroundColor={'#E0FDFF'} flex='1'>
                <SegmentedControlTab
                    values={["男", "女"]}
                    tabStyle={{
                        marginTop: 10, borderColor: "#6BC1DC",
                        backgroundColor: "#ffffff"
                    }}
                    firstTabStyle={{ marginLeft: 20 }}
                    lastTabStyle={{ marginRight: 20 }}
                    tabTextStyle={{ fontSize: 16, padding: 5, color: "#88898B", }}
                    activeTabStyle={{ backgroundColor: "#6BC1DC" }}
                    activeTabTextStyle={{ color: "white" }}
                    selectedIndex={selectedIndex}
                    onTabPress={(index) => setSelectedIndex(index)}
                />
                <SegmentedContent />
            </Box>
        </NativeBaseProvider>
    );
};

export default Gender;