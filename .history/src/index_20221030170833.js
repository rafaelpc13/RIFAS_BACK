import app from './app'
import cors from "cors";

const whitelist = ["http://localhost:3000"];
console.log(whitelist);

const corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("error"));
        }
    },
};
app.use(cors(corsOptions));
app.listen(app.get('port'))


console.log("desde el puerto", app.get('port'))