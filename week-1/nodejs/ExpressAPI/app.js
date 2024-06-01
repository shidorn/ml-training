const express = require('express');
const db = require('./db');
const e = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/users', (req, res) => {
    const users = db.prepare('SELECT * FROM users').all();
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
    const info = users.stmt(userId);
    if(info) {
        res.json(info);
    } else {
        res.json(404).json({ error: 'User not found.' });
    }
});

app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
    const insert = db.prepare('INSERT INTO users (name,email,age) VALUES (?,?,?)');
    const info = insert.run(name, email, age);
    res.json({id: info.lastInsertRowid, name, email, age});
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email, age } = req.body;
    const stmt = db.prepare('UPDATE users set name = ?, email = ?, age = ? where id= ?');
    const info = stmt.run(name, email, age,userId)
    if(info.changes === 0) {
        res.status(404).json({ error: 'User not found.' });
    } else {
        res.json({message: 'User updated successfully', affectedRows: info.changes });
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const stmt = db.prepare('DELETE FROM users WHERE id= ?');
    const info = stmt.run(userId);
    if(info.changes === 0) {
        res.status(404).json({ error: 'User not found.' });
    } else {
        res.json({message: 'User deleted successfully', affectedRows: info.changes });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});