import postgres from 'postgres'

const sql = postgres({
    'postgres://username:password@host:port/database': {
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        username: 'postgres',
        password: 'postgres',
    }
})

export default sql