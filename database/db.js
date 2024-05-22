import postgres from 'postgres'
const sql = postgres({
    'postgres://username:password@host:port/database': {
        host: process.env.DB_LOCALHOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
    }
})

export default sql