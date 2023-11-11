import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice ({
    name:"slider",

    initialState: {
        count: 0
    },
    reducers :{
        // action

        SLIDE: (state) => {
            state.count += 1
        }
    }
})

export const {SLIDE} = sliderSlice.actions
export default sliderSlice.reducer