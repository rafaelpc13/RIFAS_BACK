import sql from 'mssql'

const dbSettings={
    user:'rafael',
    password:'25698710',
    server:'DESKTOP-EVFN9RA',
    database:'restaurante'
}
sql.connect(dbSettings)