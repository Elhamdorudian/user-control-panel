import { Typography } from '@mui/material';
import DeleteUser from './DeleteUser';



import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#FBEAEB",
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function UsersList({api,users,setUsers,setOriginalUsers}) {


  return (
    <>
        <Box sx={{ width: '90%', maxWidth:'500px', margin:"auto", marginTop:'1rem' }}>
      <Grid container rowSpacing={2}>
      {users.map(user => (
        <Grid item xs={12}key= {user.id}>
          <Item  >
            <Box flexDirection={{xs:'column', sm:'row'}} sx={{display:'flex',justifyContent:'space-between', alignItems:'end'}}>
                <Box marginBottom={1} sx={{textAlign:'left'}}>
          <img alt="user avatar" src={user.avatar} width="40ps"/>
                    <Typography>{user.first_name} {user.last_name}</Typography>
                    <Typography>{user.email}</Typography>
                    </Box>
                    <DeleteUser setOriginalUsers={setOriginalUsers} api={api} id={user.id} setUsers={setUsers}/>
            </Box>
            </Item>
          </Grid>
          ))}
        </Grid>
        </Box>
    </>
  )
}




