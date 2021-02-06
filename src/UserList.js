import {useEffect, useState} from "react";
import API from "./api";
import './style.css'
import {Card} from "@material-ui/core";

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
        <div className={'main'}>
            <h1>List user</h1>
            <div className={'sous-main'}>
                { listOfUser && listOfUser.map(user=>(
                    <Card
                        style={{backgroundColor:'#476eb7'}}
                        className={'card'}>
                        <h3>Name : {user.name}</h3>
                        <h3>username : {user.username}</h3>
                        <h3>email : {user.email}</h3>
                        <h3>website : {user.website}</h3>
                    </Card>
                ))}
            </div>


        </div>
    )
}
export default UserList;
