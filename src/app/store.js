import {configureStore} from "@reduxjs/toolkit";
import counter from '../feature/counter/counterSlice';

export const store = configureStore({
    //Todo : reducers register
    reducer: {counter}
})

