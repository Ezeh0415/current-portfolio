import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slice/slider";

const store = configureStore({
    reducer: {
        slider:sliderSlice
    }
})

export default store;