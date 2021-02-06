import {useEffect, useState} from "react";
import API from "./api";
import './style.css'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

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
            <TableContainer component={Paper}>
                <Table  style={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">UserName</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Website</TableCell>
                            <TableCell align="right">phone</TableCell>
                            <TableCell align="right">Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listOfUser &&listOfUser.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.website}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.address.street +'-' +  row.address.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default UserList;
