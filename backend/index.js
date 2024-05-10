import express from 'express'
import dotenv  from 'dotenv'
import mongoose from 'mongoose'
// imported the route but changed the name for easy recognition
import userRouter from "./routes/User.route.js"
// dotenv configuration 
dotenv.config()

// texting if we are connected to mongodb database
mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})

// initializing our backend into the terminal
const app = express()
app.listen(3000,()=>{
    console.log("server is running on port 3000..")
})

app.use("/api/user",userRouter)
