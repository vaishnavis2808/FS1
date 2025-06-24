import mongoose from "mongoose"
const formSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    department:String
})
const Form=mongoose.model('formdatas',formSchema)
export default Form