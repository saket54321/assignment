import express from "express";
import mongoose from "mongoose";
import {PORT,MongodbURL} from "./config.js"
import router from "./fooddelivery/food.router.js";

const app=express();
app.use(express.json());

app.use('/food',router);

mongoose.connect(MongodbURL)
.then(()=>{
    
    app.listen(PORT,()=>{
        console.log(`app is listening on:${PORT}`);
    })
    console.log("app is connected to database");
})
.catch((error)=>{
    console.log("error in connecting wirh database");
})

