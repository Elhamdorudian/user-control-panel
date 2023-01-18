import React from 'react'
import { useState, useEffect} from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteUser} from "./apiMethods";

export default function DeleteUser({api,id,setUsers,setOriginalUsers}) {


    const[deleteId,setDeleteId] = useState("")

    const handleDelete = (e,id) => {
        e.preventDefault();
        setDeleteId(id) 
    }

    useEffect(() => {
        deleteUser(api, deleteId)
        .then( () => {
            setUsers(prevUsers => prevUsers.filter(user => user.id !== deleteId));
            setOriginalUsers(prevUsers => prevUsers.filter(user => user.id !== deleteId));

        })
        .catch(err => console.log(err))
    },[deleteId,api,setUsers,setOriginalUsers])


  return (
    <>
        <Button 
            variant="outlined" 
            startIcon={<DeleteIcon />}
            onClick={ e => handleDelete(e,id)}
        >
        Delete
        </Button>
    </>
  )
}
