import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import postsRoute from './routes/posts.js';
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit : "30mb" , extended : true })) ;
app.use(bodyParser.urlencoded({ limit : "30mb" , extended : true })) ;
app.use(cors());

app.use('/posts',postsRoute);

/*app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });*/

//const CONNECT_URI = "mongodb+srv://user1:o64VyMcgcSL4JN57@cluster0.hgkae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


const PORT = process.env.PORT ;


//const uri = process.env.CONNECT_URI;

mongoose.connect(process.env.CONNECT_URI , {useNewUrlParser : true , useUnifiedTopology : true })
    .then(()=> app.listen(PORT,()=> console.log("server running :"+PORT)))
    .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);


 