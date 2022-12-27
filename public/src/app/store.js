import {configureStore} from "@reduxjs/toolkit";
import postReducer from "../featuers/postSlice"

export  default configureStore({
    reducer:{
        post: postReducer,

    },
});