import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';



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


export default function PickDate({ navigation, route }) {

    // const DateTimeContex = useContext(DateTimeCtx);

    const [datePicker, setDatePicker] = useState(false);

    const [date, setDate] = useState(new Date());

const minDate= new Date("06/01/2022 9:00 AM");
const maxDate=new Date("06/30/2022 9:00 PM");




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
        <Box backgroundColor={'#E0FDFF'} flex='1'>

            <Center>
                <Text margin={7} fontSize={16}>選擇租借  {route.params.title} 的日期</Text>
            </Center>

            <View style={styles.MainContainer}>

                {datePicker && (
                    <DateTimePicker
                        value={date}
                        minimumTime={minDate}
                        maximumDate={maxDate}
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
                        minimumDate={minDate}
                        maximumDate={maxDate}
                        mode={'time'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={false}
                        onChange={onTimeSelected}
                        style={styles.datePicker}
                    />
                )}

               

                {!datePicker && (
                    <View style={{ margin: 10 }}>
                        <Pressable borderRadius={20}
                    backgroundColor={"#34CEC5"}  justifyContent={'center'} alignItems={"center"}  onPress={showDatePicker}>
                            <Text fontSize={18}>選擇日期</Text>
                        </Pressable>
                        <Text style={styles.text}>Date = {date.toDateString()}</Text>

                    </View>
                )}

                {!timePicker && (
                    <View style={{ margin: 10 }}>
                         <Pressable borderRadius={20}
                    backgroundColor={"#8CC3F6"}  justifyContent={'center'} alignItems={"center"}  onPress={showTimePicker}  >
                            <Text fontSize={18}>選擇時間</Text>
                        </Pressable>
                        <Text style={styles.text}>Time = {time.toLocaleTimeString('en-US')}</Text>
                    </View>
                    
                )}
 





                <Pressable
                    onPress={() => navigation.navigate('Payment', route.params)}
                   borderRadius={20}
                    backgroundColor={"#FFAAAA"}
                    width={120}
                    justifyContent={'center'} alignItems={"center"}
                ><Text fontSize={20}>確認</Text></Pressable>


            </View>
        </Box>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

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
        color: 'black',
        padding: 3,
        marginBottom: 50,
        marginTop: 30,
        textAlign: 'center'
    },


    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },

});