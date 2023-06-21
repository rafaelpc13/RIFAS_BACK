import app from './app'
import cors from "cors";

const whitelist = ["http://localhost:3000"];

const corsOptions = {
    origin: function(origin, callback) {
        //console.log(origin);
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