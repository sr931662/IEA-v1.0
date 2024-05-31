import mongoose from "mongoose";

// Registered user model
const UserSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    phone: String,
    email: String,
    pass: String,
    repass: String
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel