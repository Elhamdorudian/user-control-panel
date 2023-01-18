import { useState} from 'react';
import { TextField, Card, CardContent,Button } from '@mui/material';


export default function Search({originalUsers,setUsers}) {

    const [search,setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(search.length === 0){
          setUsers(originalUsers);
        }else{
          setUsers(originalUsers);
            setUsers(prevUsers => prevUsers.filter(user => user.first_name.toLowerCase().includes(search.toLowerCase())))
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
            name="searchField"
            type="text"
            variant="outlined"
            placeholder='search'
            
        >

        </TextField>
        <Button
            variant='contained'
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