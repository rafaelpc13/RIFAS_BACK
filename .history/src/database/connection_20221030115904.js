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
    try{
        const pool = await sql.connect(dbSettings)
        return pool;
    }catch(error){
        console.error(error);
    }
   
}

getConnection();