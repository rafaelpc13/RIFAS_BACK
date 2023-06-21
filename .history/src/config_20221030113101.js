import {config} from 'dotenv'
config();


console.log(process.env.PORT)

export default{
    port:4000
}