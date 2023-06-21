import app from './app'
import cors from "cors"
app.listen(app.get('port'))

console.log("desde el puerto",app.get('port'))