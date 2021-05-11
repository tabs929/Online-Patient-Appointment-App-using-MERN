import { mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    Username: String,
    Password: {type : String, required:true}
})

export default mongoose.model("User",userSchema);