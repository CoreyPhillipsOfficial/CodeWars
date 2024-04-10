// SQL queries can be executed in JavaScript using database libraries like sqlite3, pg-promise, etc.

// Example using sqlite3 library
const sqlite3 = require('sqlite3').verbose();

// Open a database connection
const db = new sqlite3.Database(':memory:');

// Execute a SQL query
db.serialize(() => {
    db.run('CREATE TABLE Students (id INTEGER PRIMARY KEY, name TEXT)');

    // Insert data into the table
    const stmt = db.prepare('INSERT INTO Students (name) VALUES (?)');
})