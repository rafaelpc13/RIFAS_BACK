import sql from 'mssql'

const dbSettings = {
    user: 'rafael',
    password: '25698710',
    server: 'localhost',
    database: 'restaurante',
    options:{
        encrypt: true, // for azure
        trustServerCertificate: true,
    },

}

async function getConnection() {
    const pool = await sql.connect(dbSettings)
    const result = await pool.request().query("SELECT * from dbo.Campos");
    console.log(result);

}

getConnection();