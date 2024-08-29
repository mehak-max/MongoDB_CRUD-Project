// what to store in database should be written in this file 
import mongoose from "mongoose";
const {Schema}= mongoose;
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }, 
})
const User = mongoose.model("user", userSchema);
export default User;
// module is a function(piece of code)
