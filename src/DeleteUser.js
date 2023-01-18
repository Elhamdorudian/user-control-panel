import React from 'react'
import { useState, useEffect} from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteUser} from "./apiMethods";

export default function DeleteUser({users,setUsers,api,id}) {


    const[deleteId,setDeleteId] = useState("")

    const handleDelete = (e,id) => {
        e.preventDefault();
        setDeleteId(id) 
    }

    useEffect(() => {
        deleteUser(api, deleteId)
        .then( setUsers(prevUser => prevUser.filter(user => user.id !== deleteId)))
        .catch(err => console.log(err))
    },[deleteId,api,setUsers])


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
