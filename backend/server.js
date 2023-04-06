const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const colors = require("colors")
const app = express();
const userRoute = require("./routes/user")


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/user",userRoute);

// connect DB
const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
};
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected")
});
connect()

app.listen(process.env.PORT,(req,res)=>{
    console.log("backend")
})