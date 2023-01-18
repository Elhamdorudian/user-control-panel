import UsersList from "./UsersList";
import Search from "./Search";
import {getUser} from "./apiMethods";
import { useEffect, useState } from "react";

function App() {

  const [originalUsers,setOriginalUsers]= useState([]);
  const [users,setUsers] = useState([]);

  const api = "api/users";

  useEffect(() => {
    getUser(api)
      .then((res) => {
        setOriginalUsers(res.data.data)
        setUsers(res.data.data)
      })
      .catch((err) => console.log(err));
  }, [api]);

  return (

    <>
    <Search originalUsers={originalUsers} setUsers={setUsers} />
    <UsersList setOriginalUsers={setOriginalUsers} api={api} users={users} setUsers={setUsers} />
    </>
  );
}

export default App;
