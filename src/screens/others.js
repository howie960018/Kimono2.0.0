import React, { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Box, Center, NativeBaseProvider, useColorMode, Button, Actionsheet, useDisclose, Icon } from "native-base";

import kimdata from '../data/kimono.json';
import OtherList from "../components/OtherList"

function Others({navigation}) {
  
    const [selectedIndex, setSelectedIndex] = useState(0);


    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (


                <Center >
                    
                    <OtherList
                        list={kimdata.umbrella}
                        navigation={navigation}
                    />
                </Center>

            )
        } else {
            return (
                <Center >
                
                <OtherList
                    list={kimdata.hairclip}
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
                    values={["髮飾", "和傘"]}
                    tabStyle={{
                        marginTop: 10, borderColor: "#FFAAAA",
                        backgroundColor: "#ffffff"
                    }}
                    firstTabStyle={{ marginLeft: 20 }}
                    lastTabStyle={{ marginRight: 20 }}
                    tabTextStyle={{ fontSize: 16, padding: 5, color: "#88898B", }}
                    activeTabStyle={{ backgroundColor: "#FFAAAA" }}
                    activeTabTextStyle={{ color: "white" }}
                    selectedIndex={selectedIndex}
                    onTabPress={(index) => setSelectedIndex(index)}
                />
                <SegmentedContent />
            </Box>
        </NativeBaseProvider>
    );
};

export default Others;