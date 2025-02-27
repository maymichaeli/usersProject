const express= require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users= [
    { id:1 , name: "Alice", age: 25 },
    { id:2 , name: "Bob", age: 30 },
];

app.get("/users", (req,res) =>{
    res.json(users);
})

app.post("/users", (req, res) => {
    const { name, age } = req.body;
    const newUser = {id: users.length+1, name, age};
    users.push(newUser);
    res.status(201).json(newUser);
});

app.delete("/users/:id", (req,res) =>{
    users= users.filter(user=> user.id !== parseInt(req.params.id));
    res.status(204).send();
})

app.listen(3000, () => console.log("Server running on port 3000"));
