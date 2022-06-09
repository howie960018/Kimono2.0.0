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

            {/* <Center>
                <Text margin={7} fontSize={16}>選擇租借  {route.params.title} 的日期</Text>
            </Center> */}
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
                    <View style={{ marginTop: 60 }}>
                        <Pressable borderRadius={20}
                    backgroundColor={"#34CEC5"}  justifyContent={'center'} alignItems={"center"}  onPress={showDatePicker}>
                            <Text fontSize={24} color={'white'}>選擇日期</Text>
                        </Pressable>
                        <Text style={styles.text}>Date : {date.toDateString()}</Text>

                    </View>
                )}

                {!timePicker && (
                    <View style={{ margin: 10 }}>
                         <Pressable style={styles.datebtn} borderRadius={20}
                    backgroundColor={"#8CC3F6"}  justifyContent={'center'} alignItems={"center"}  onPress={showTimePicker}  >
                            <Text fontSize={24} color={'white'}>選擇時間</Text>
                        </Pressable>
                        <Text style={styles.text}>Time : {time.toLocaleTimeString('en-US')}</Text>
                    </View>
                    
                )}
 





                <Pressable
                    onPress={() => navigation.navigate('Payment', route.params)}
                   borderRadius={30}
                    backgroundColor={"#FFAAAA"}
                    justifyContent={'center'} alignItems={"center"}
                    style={styles.confirm}
                ><Text fontSize={22} color={'white'}>確認</Text></Pressable>


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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    dateText: {
        margin: 25,
        fontSize: 18,
    },
    parctrl:{
        display:"flex",
        flexDirection:"row"
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
    datebtn:{
        width:180,
        height:45
    },

    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },

});