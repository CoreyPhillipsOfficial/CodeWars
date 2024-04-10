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
    stmt.run('Alice');
    stmt.run('Bob');
    stmt.finalize();

    // Retrieve data from the table
    db.each('SELECT id, name FROM Students', (err, row) => {
        console.log(`${row.id}: ${row.name}`);
    });
});

// Close the database connection
db.close();
