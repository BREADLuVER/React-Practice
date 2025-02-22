import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    clicks: 0
};

const clickSlice = createSlice({
    name:'clicks',
    initialState,
    reducers:{
        increment: (state) => {
            state.clicks += 1;
        }
    }
});

export const {increment} = clickSlice.actions;
export default clickSlice.reducer;