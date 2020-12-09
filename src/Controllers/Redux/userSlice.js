import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUsers:(state)=>{
            state.push({name:"Medkour Rassim"})
            state.push({ name: "Medkour Younes" })
        },

    }
})

export default slice.reducer;

export const {getUsers} = slice.actions;