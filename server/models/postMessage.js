import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    patientName : String,
    patientAge : String,
    patientPhone : String,
    message : String,
    selctedFile : String,
})

var PostMessage = mongoose.model('PostMesssage',postSchema);
export default PostMessage;