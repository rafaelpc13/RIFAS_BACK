import app from './app'
import cors from "cors"


app.listen(app.get('port'))

const whilelist = ["http://localhost:3000"];

const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin);
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("error"));
        }
    }
}

app.use(cors(corsOptions));

console.log("desde el puerto", app.get('port'))