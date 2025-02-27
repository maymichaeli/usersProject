import { useState } from 'react'
import './App.css'
import {Header} from './components/Header'
import {UsersList} from './components/UsersList'
import {AddUser} from './components/AddUser'

function App() {
  const [users, setUsers] = useState([]);

  
  return (
    <>
     <Header />
      <AddUser onUserAdded={(newUser) => setUsers([...users, newUser])} />
      <UsersList users={users} setUsers={setUsers} />
    </>
  )
}

export default App
