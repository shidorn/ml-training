const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/users', (req, res) => {
    const users = db.prepare('SELECT * FROM users').all();
    res.json(users);
});

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    console.log(userId)
    // const users = db.prepare('SELECT * FROM users').all();
    res.json(userId);
});

app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
    const insert = db.prepare('INSERT INTO users (name,email,age) VALUES (?,?,?)');
    const info = insert.run(name, email, age);
    res.json({id: info.lastInsertRowid, name, email, age});
});

// app.get('/users/:id', (req, res) => {
//     const {id} = req.params;
//     console.log(id);
//     const users = db.prepare('SELECT * FROM users WHERE id = ${id}`').all();
//     res.json(users);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});