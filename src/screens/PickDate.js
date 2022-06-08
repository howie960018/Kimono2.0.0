import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { setSelectedStartDate } from '../redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onDateSelected, onTimeSelected } from '../components/context/DateContext';
import { useContext } from 'react';


import {
    StyleSheet,
    StatusBar,
    Button,
    View,
    Platform,
    SafeAreaView,
    Pressable
} from 'react-native';
import { Box, Center, Text, TouchableOpacity } from 'native-base';
import { selectDate } from "../redux/counterSlice";

export default function PickDate({ navigation, route }) {

    // const DateTimeContex = useContext(DateTimeCtx);

    const [datePicker, setDatePicker] = useState(false);

    const [date, setDate] = useState(new Date());

    const [timePicker, setTimePicker] = useState(false);

    const [time, setTime] = useState(new Date(Date.now()));


    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };

    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };


    function showDatePicker() {
        setDatePicker(true);
    };

    function showTimePicker() {
        setTimePicker(true);
    };

    return (

        <Box  flex={1}
        _dark={{ bg: "#6C6C6C" }}
        _light={{ bg: "#E0FDFF" }}>
            
            {/* 選擇日期 */}
            <Box marginTop={8} marginLeft={8} style={styles.parctrl}>
                <Text  fontSize={22}>選擇租借</Text>
                <Text bold fontSize={22}>{route.params.title}</Text>
                <Text fontSize={22}>的日期和時間</Text>
            </Box>
            

            <View style={styles.MainContainer}>

                {datePicker && (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        onChange={onDateSelected}
                        style={styles.datePicker}
                    />
                )}
               



                {timePicker && (
                    <DateTimePicker
                        value={time}
                        mode={'time'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={false}
                        onChange={onTimeSelected}
                        style={styles.datePicker}
                    />
                )}

               

                {!datePicker && (
                    <View marginTop={60} >
                        <Pressable style={styles.datebtn}  borderRadius={20} backgroundColor={"#34CEC5"} marginLeft={40} justifyContent={'center'} alignItems={"center"}  onPress={showDatePicker}>
                            <Text fontSize={24} color={'white'}>選擇日期</Text>
                        </Pressable>
                        <Text color={"#34CEC5"} style={styles.text}>Date = {date.toDateString()}</Text>

                    </View>
                )}

                {!timePicker && (
                    <View style={{ marginTop:10 }}>
                        <Pressable style={styles.datebtn} borderRadius={20} backgroundColor={"#8CC3F6"}  justifyContent={'center'} alignItems={"center"}  onPress={showTimePicker}  >
                            <Text fontSize={24} color={'white'}>選擇時間</Text>
                        </Pressable>
                        <Text color={"#8CC3F6"} style={styles.text}>Time = {time.toLocaleTimeString('en-US')}</Text>
                    </View>
                    
                )}
 





                <Pressable
                    style={styles.confirm}
                    onPress={() => navigation.navigate('Payment', route.params)}
                    borderRadius={30}
                    backgroundColor={"#FFAAAA"}
                    justifyContent={'center'} alignItems={"center"}
                ><Text color={"white"} fontSize={22}>確認</Text></Pressable>


            </View>
        </Box>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    confirm:{
        marginTop:20,
        width:200,
        height:50
    },
    parctrl:{
        display:"flex",
        flexDirection:"row"
    },
    datebtn:{
        width:180,
        height:45
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    dateText: {
        margin: 25,
        fontSize: 18,
    },



    MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',

    },

    text: {
        fontSize: 25,
        padding: 3,
        marginBottom: 50,
        marginTop: 30,
        textAlign: 'center'
    }, 

});