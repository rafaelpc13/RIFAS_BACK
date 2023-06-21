import sql from 'mssql'

const dbSettings = {
    user: 'rafael',
    password: '25698710',
    server: 'DESKTOP-EVFN9RA',
    database: 'restaurante'
}

async function getConnection() {
    const pool = await sql.connect(dbSettings)
    const result = await pool.request().query("SELECT 1");
    console.log(result);

}

getConnection()