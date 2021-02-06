import {combineReducers, configureStore, createSlice} from "@reduxjs/toolkit";

const list = [
    {
        id:'0000000',
        description:'uitjhghj',
        isDone:'true',
        date:'06-02-2012',
        status:'DONE'
    },
    {
        id:'111111',
        description:'uitjhghj',
        isDone:'true',
        date:'06-02-2012',
        status:'DONE'
    },
    {
        id:'2222222',
        description:'uitjhghj',
        isDone:'true',
        date:'06-02-2012',
        status:'DONE'
    }
]
const  listSlice = createSlice({
    name:'list',
    initialState:{
        tasks: list,
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
