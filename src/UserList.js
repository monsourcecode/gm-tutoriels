import {useEffect, useState} from "react";
import API from "./api";

const UserList = ()=>{
    const [listOfUser,setListOfUser]=useState([])

    useEffect(()=>{
     API.get('users')
         .then(res=>{
         setListOfUser(res.data);
     }).catch(err=> {
         console.log(err)
     })
    },[])

    return(
        <div>
            <h1>List user</h1>

        </div>
    )
}
export default UserList;
