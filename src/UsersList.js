import { useState, useEffect} from 'react';
import { TextField, Card, CardContent, Button,Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteUser} from "./apiMethods";


export default function UsersList({users}) {

    const[deleteId,setDeleteId] = useState("")

    const handleDelete = (e,id) => {
        e.preventDefault();
        setDeleteId(id)
        
    }

    useEffect(() => {
        deleteUser()
    },[deleteId])

  return (
    <>
        <Card>
            {users.map(user => (
                <CardContent key= {user.id}>
                    <img alt="user avatar" src={user.avatar} width="40ps"/>
                    <Typography>{user.first_name} {user.last_name}</Typography>
                    <Typography>{user.email}</Typography>
                    <Button 
                    variant="outlined" 
                    startIcon={<DeleteIcon />}
                    onClick={ e => handleDelete(e, user.id)}
                >
                        Delete
                    </Button>
                </CardContent>
            ))}
        </Card>
    </>
  )
}
