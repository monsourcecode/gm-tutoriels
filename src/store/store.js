import {combineReducers, configureStore, createSlice} from "@reduxjs/toolkit";


const  listSlice = createSlice({
    name:'list',
    initialState:{
        tasks: [],
    },
    reducers :{
        pushTask : (state, action) =>
            ({...state, tasks: action.payload}),
    },
})
export const {pushTask} = listSlice.actions;

const reducer = combineReducers({
    list: listSlice.reducer
})

export default configureStore({
    reducer
})
