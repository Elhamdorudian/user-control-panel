import { useState} from 'react';
import { TextField, Card, CardContent,Button } from '@mui/material';


export default function Search({users,setUsers,originalUsers,setOriginalUsers}) {

    const [search,setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(search.length === 0){
            setUsers(originalUsers)
        }else{
            setUsers(originalUsers);
            setUsers((prevUsers) => prevUsers.filter(user => user.firs_name.toLowerCase().includes(search.toLowerCase())))
            setSearch("")
        }
        
    }

  return (
    <>
    <Card>
      <CardContent>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
        <TextField
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            label="search"
            type="text"
            variant="outlined"
            placeholder='search'
            fullWidth
        >

        </TextField>
        <Button
            variant='contained'
            fullWidth
            color='primary'
            type='submit'
        >
            search
        </Button>
        </form>

      </CardContent>
    </Card>
    </>
  )
}