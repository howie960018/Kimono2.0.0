import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { setSelectedStartDate } from '../redux/counterSlice';
import { useDispatch ,useSelector} from 'react-redux';

import Date from '../components/Date';
import {
    StyleSheet,
    StatusBar,

    View,
    Platform
} from 'react-native';
import { Box, Button, Center, Text ,TouchableOpacity} from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import { selectDate } from "../redux/counterSlice";



export default function PickDate({ navigation,route }) {


    const chosendate = useSelector(selectDate);
    const dispatch=useDispatch();

    // const [selectedStartDate, setselectedStartDate] = useState(null);
    // const startDate = selectedStartDate
    //   ? selectedStartDate.format('YYYY-MM-DD').toString()
    //   : '';
 
    return (
        <Box backgroundColor={'#E0FDFF'} flex='1' >
        <Center>
            <Text margin={7} fontSize={16}>選擇租借  {route.params.title} 的日期</Text>
            <CalendarPicker backgroundColor={'#ffffff'} onDateChange={()=>dispatch(setSelectedStartDate(chosendate))} />
           
            <Text margin={4} fontSize={20}>預約日期:{chosendate}</Text>
            <Button
                onPress={() => navigation.navigate('Payment',route.params)}
                title="Kimono"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
            >GO TO PAY</Button>
          </Center>
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
});