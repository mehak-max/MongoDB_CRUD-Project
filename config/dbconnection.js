// connection with database 
import mongoose from 'mongoose';
const dbconnection = ()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/onlinestore');
        console.log("connect to database")
    } catch(error){
        console.log(error, 'Failed to connect to MongoDB')
    }
}
export default dbconnection