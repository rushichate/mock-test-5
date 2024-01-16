const express = require("express")
const cors = require("cors")
const { serverConnect } = require("./backend/db")
const { jobRouter } = require("./backend/routes/job.route")
require("dotenv").config()
const app = express()


app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Welcome to Masai Job App")
})
app.use("/jobs",jobRouter)


app.listen(process.env.PORT,async()=>{
    try{
        await serverConnect
        console.log(`Connected to DB and server is running fine`)

    }catch(error){
        console.error("Error connecting server:",error)
    }
})