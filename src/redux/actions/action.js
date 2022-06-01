import { createSlice} from "@reduxjs/toolkit";
 import { configureStore } from '@reduxjs/toolkit';


 const ORDERED = 'ORDERED'

function Order() {
    return {
        type: ORDERED,
        quantity: 1
    }
}

 const initialState={
     numOfCakes:1000,
 }

const reducer=(state,action)=>{
    switch(action.type){
        case ORDERED:
            return {
                ...state,
                numOfCakes:state.numOfCakes-1,
            }
            default:
                return state
    }
}


const store =configureStore(reducer)