import app from './app'
import './database/connection'

app.listen(app.get('port'))

console.log("desde el puerto",app.get('port'))