import {createSlice} from '@reduxjs/toolkit';
import {retrieveBugs} from '../bugController'
const slice = createSlice({
    name:"bug",
    initialState:[],
    reducers:{
        getBugs:state =>retrieveBugs(),

        createBug:(state,actions)=>{

        },
        updateBug:(state,actions)=>{

        },
        markComplete:(state,actions)=>{

        }
    }
})

export default slice.reducer;
export const {getBugs,createBug,updateBug,markComplete} = slice.actions;