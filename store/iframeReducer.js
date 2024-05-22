import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    sub: '',
};

const iframe = createSlice({
    name: 'iframe',
    initialState,
    reducers: {
        setSub: (state, action) => {
            state.sub = action.payload;
        },
    },
});
export const {setSub} = iframe.actions;
export default iframe.reducer;
