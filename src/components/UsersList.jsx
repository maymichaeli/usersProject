import { useEffect, useState } from "react";
import axios from "axios";

export const UsersList = () =>
{
     const [users, setUsers]= useState([]);
    
      useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res => setUsers(res.data))
        .catch(err => console.error(err));
    }, [users]);
    
    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`);
            setUsers(users.filter(user => user.id !== id)); // עדכון הרשימה ב-Frontend
        } catch (err) {
            console.error(err);
        }
    };

    return(
        <div className="userList-container">
        <h2>Users List</h2>
        {users.length === 0 ? <p>No users found</p> :
            <ul>
                {users.map(user => (
                     <li key={user.id}>
                     {user.name} - {user.age} years old
                     <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        }
    </div>
    )
}