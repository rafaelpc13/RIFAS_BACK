import app from './app'
import cors from 'cors'





app.listen(app.get('port'))
//app.use(cors(corsOptions));

console.log("desde el puerto", app.get('port'))