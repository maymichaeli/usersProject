import { useState } from "react";
import axios from "axios";

export const AddUser = ({ onUserAdded }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !age) return;

        try {
            const res = await axios.post("http://localhost:3000/users", { name, age: parseInt(age) });
            onUserAdded(res.data);
            setName("");
            setAge("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="addUser-container">
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}