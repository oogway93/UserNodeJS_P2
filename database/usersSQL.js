const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('user.db');

db.run(`
    CREATE TABLE IF NOT EXISTS users
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(30) NOT NULL,
        age INTEGER NOT NULL
    );
`)

module.exports = {
    async getUsers() {
        try {
            const users = await new Promise((resolve, reject) => {
                db.all(`SELECT * FROM users;`, [], (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                })
            })
            return users
        } catch (err) {
            return null
        }
    },
    async createUser(name, age) {
        const lastID = await new Promise((resolve, reject) => {
            db.run(`INSERT INTO users(name, age) VALUES(?, ?)`, [name, age], function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve(this.lastID)
                }
            })
        })
        return { id: lastID, name: name, age: age }
    }
}


