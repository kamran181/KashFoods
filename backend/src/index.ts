import express ,{Request ,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING as string) .then(()=>{
    console.log("Mongo DB database connected successfully...")
})

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test',async(req:Request,res :Response)=>{
    res.json({
        "message" : "Hello From Kamran!"
    })
});

app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
})