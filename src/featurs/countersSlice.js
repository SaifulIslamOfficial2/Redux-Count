import { createSlice } from "@reduxjs/toolkit";


const initialdata = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ];

const countersSlice = createSlice({
    name: "counters",
    initialState: initialdata,
    reducers: {
        incriment:(state, action)=>{
            const countIndex = state.findIndex((item)=> item.id ==action.payload);
            // state[countIndex].value=state[countIndex].value + 1;
            state[countIndex].value++

        },
        decriment:(state, action)=>{
            const countIndex = state.findIndex((item)=> item.id ==action.payload);
            // state[countIndex].value=state[countIndex].value + 1;
            state[countIndex].value--
        },
    }
});

export default countersSlice.reducer;
export const {incriment,decriment}= countersSlice.actions;