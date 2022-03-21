import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./styles.css";

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected,setUserSelected] = useState (null);

    useEffect(() =>{
        axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data));
    },[])

    const getUsers = () => {
      axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
    }

    const removeUser = (id) =>{
      axios.delete (`https://users-crud1.herokuapp.com/users/${id}/`)
      .then (() => getUsers());
    }

  return (
    <div className="App">
      <UsersForm 
      getUsers={getUsers} 
      userSelected={userSelected} 
      setUserSelected={setUserSelected} />
      
      <UsersList 
      users={users} 
      setUserSelected={setUserSelected}
      removeUser={removeUser} />
      
    </div>
  );
}

export default App;
