// import { useState, useEffect} from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import DeleteUser from './DeleteUser';


export default function UsersList({users,setUsers,api}) {


  return (
    <>
        <Card>
            {users.map(user => (
                <CardContent key= {user.id}>
                    <img alt="user avatar" src={user.avatar} width="40ps"/>
                    <Typography>{user.first_name} {user.last_name}</Typography>
                    <Typography>{user.email}</Typography>
                    <DeleteUser setUsers={setUsers} api={api} id={user.id} />
                </CardContent>
            ))}
        </Card>
    </>
  )
}
