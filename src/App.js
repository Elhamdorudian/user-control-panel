import UsersList from "./UsersList";
import Search from "./Search";
// import { TextField, Card, CardContent } from '@mui/material';
import {getUser} from "./apiMethods";
import { useEffect, useState } from "react";

function App() {

  const [users,setUsers] = useState([]);
  const [originalUsers,setOriginalUsers]= useState([]);
  const api = "api/users";

  useEffect(() => {
    getUser(api)
      .then((res) => {
        setUsers(res.data.data);
        setOriginalUsers(res.data.data)
      })
      .catch((err) => console.log(err));
  }, [api]);

  return (
    <>
    {/* <Card>
      <CardContent>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >

        </form>
      </CardContent>
    </Card> */}
    <Search users={users} setUsers={setUsers} originalUsers={originalUsers} setOriginalUsers={setOriginalUsers} />
    <UsersList users={users} setUsers={setUsers} api={api}/>
    </>
  );
}

export default App;
