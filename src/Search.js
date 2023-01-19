import { useState} from 'react';
import { TextField, Card, CardContent,Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FBEAEB",
      contrastText: "#2F3C7E"
    },
  },
});
export default function Search({originalUsers,setUsers,users}) {

    const [search,setSearch] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        if(search.length === 0){
          setUsers(originalUsers);
        }else{
          setUsers(originalUsers);
            setUsers(prevUsers => prevUsers.filter(user => user.first_name.toLowerCase().includes(search.toLowerCase())))
            setSearch("")
            if(users.length === 0){
            }
        }
        
    }

  return (
    <ThemeProvider theme={theme}>
    <Card sx={{boxShadow:"none", marginTop:"4rem", backgroundColor:"#2F3C7E"}}>
      <CardContent>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          style={{display:'flex', justifyContent:'center'}}
        >
        <TextField
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            label="search"
            name="searchField"
            type="text"
            variant="outlined"
            placeholder='search'
            color='primary'
            focused
            sx={{width:'75%', maxWidth:'400px',input: { color: '#FBEAEB' }}}
        >
        </TextField>
        <Button
            variant='contained'
            color='primary'
            type='submit'
            sx={{marginLeft:'0.5rem'}}
        >
            search
        </Button>
        </form>

      </CardContent>
    </Card>
    </ThemeProvider>
  )
}