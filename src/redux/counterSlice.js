import { createSlice } from '@reduxjs/toolkit';


// Part1: Define Slice (including reducers and actions)
const initialState = { 
  title:[],
  counterValue: 0,
  OtherValue:0,
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
      if(state.counterValue <0){
        state.counterValue = initialState.counterValue;
      }
    },
    increaseOtherOne: (state, action) => {
      state.OtherValue = action.payload + 1;
    },
    decreaseOtherOne: (state, action) => {
      state.OtherValue = action.payload - 1;
      if(state.OtherValue <0){
        state.OtherValue = initialState.OtherValue;
      }
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
      
    },
    addToCart(state, { payload }) {
      
      const { title } = payload;

      const find = state.find((item) => item.title === title);
      
      if (find) {
        return state.map((item) =>
          item.title === title
            ? {
                ...item,
                counterValue: item.counterValue + 1,
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          counterValue: 1,
        });
      }
    },
    removeItem: (state, action) => {

      const title = action.payload;
      return state.filter((item) => item.title !== title);
    },
    clear(state) {
      return [];
    },
  },
});

// export state to global
export const selectPrice = (state) => state.counter.Total;
export const selectCounter = (state) => state.counter.counterValue;
export const selectOtherCounter=(state)=>state.counter.OtherValue;
export const selectProductName = (state) => state.counter.ProductName;
export const selectDate = (state) => state.counter.selectedStartDate;



// export actions to global
export const {increaseOtherOne,decreaseOtherOne, setCounter,setProductName,selectA, selectB,selectC,selectD, increaseOne, decreaseOne,setSelectedStartDate,addToCart,removeItem,clear } = counterSlice.actions;

// export reducer to global
export default counterSlice.reducer;
