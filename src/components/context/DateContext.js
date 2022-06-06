// import React, { useState } from "react";
// import { createContext } from "react";


// export const DateContext = createContext({
//     date: "",
//     time: ""
// });


// function DateCtxProvider({ children }) {

//     const [datePicker, setDatePicker] = useState(false);

//     const [date, setDate] = useState(new Date());

//     const [timePicker, setTimePicker] = useState(false);

//     const [time, setTime] = useState(new Date(Date.now()));

   

//     function onDateSelected(event, value) {
//         setDate(value);
//         setDatePicker(false);
//     };

//     function onTimeSelected(event, value) {
//         setTime(value);
//         setTimePicker(false);
//     };


//     {datePicker && (
//         <DateTimePicker
//             value={date}
//             mode={'date'}
//             display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//             is24Hour={true}
//             onChange={onDateSelected}
//             style={styles.datePicker}
//         />
//     )}

//     {timePicker && (
//         <DateTimePicker
//             value={time}
//             mode={'time'}
//             display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//             is24Hour={false}
//             onChange={onTimeSelected}
//             style={styles.datePicker}
//         />
//     )}

//     const value = {
//         date: date,
//         time: time
//     };

//     return <DateContext.Provider value={value}>{children}</DateContext.Provider>
// }

// export default DateCtxProvider;