const Database = require('better-sqlite3');

const db = new Database(':memory:', {verbose: console.log});

db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, age INTEGER)');

module.exports = db;