import React from 'react'
import { useState, useEffect} from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteUser} from "./apiMethods";
import { ThemeProvider } from '@emotion/react';


import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F3C7E",
      contrastText: "#FBEAEB"
    }
  },
});
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
    <ThemeProvider theme={theme}>
        <Button 
            sx={{height:'50px'}}
            variant="contained" 
            startIcon={<DeleteIcon />}
            onClick={ e => handleDelete(e,id)}
            color="primary"        >
        Delete
        </Button>
    </ThemeProvider>
  )
}
