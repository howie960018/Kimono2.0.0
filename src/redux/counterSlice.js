import { createSlice } from '@reduxjs/toolkit';
import CalendarPicker from 'react-native-calendar-picker';


// Part1: Define Slice (including reducers and actions)
const initialState = { 
  counterValue: 0,
  ProductName:null,
  Total:'0',
  selectedStartDate:'2022-01-01',

  
 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.Total = action.payload;
    },
    setSelectedStartDate:(state, action) => {

      state.selectedStartDate = action.payload;
      
      
    },
    increaseOne: (state, action) => {
      state.counterValue = action.payload + 1;
    },
    decreaseOne: (state, action) => {
      state.counterValue = action.payload - 1;
    },
    setProductName: (state, action) => {
      state.ProductName = action.payload;
    },
    
    selectA: (state, action) => {
      state.ProductName = 'S';
      
    },
    selectB: (state, action) => {
      state.ProductName ='M';
     
    },
    selectC:(state,action)=>{
      state.ProductName='L';
      
    },
    selectD:(state,action)=>{
      state.ProductName='XL';
      
    }
  },
});

// export state to global
export const selectPrice = (state) => state.counter.Total;
export const selectCounter = (state) => state.counter.counterValue;
export const selectProductName = (state) => state.counter.ProductName;
export const selectDate = (state) => state.counter.selectedStartDate;



// export actions to global
export const { setCounter,setProductName,selectA, selectB,selectC,selectD, increaseOne, decreaseOne,setSelectedStartDate } = counterSlice.actions;

// export reducer to global
export default counterSlice.reducer;
