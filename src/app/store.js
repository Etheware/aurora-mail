import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/counterSlice";

export default configureStore({
    reducer: {
        mail: mailReducer,
    },
});