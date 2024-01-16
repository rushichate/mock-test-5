const express = require("express")
const { JobModel } = require("../models/job.model")
const jobRouter = express.Router()

jobRouter.get("/",async(req,res)=>{
    try{
        const jobs = await JobModel.find()
        res.status(200).json(jobs)

    }catch(error){
        res.status(400).json({message:`Error while fetching jobs:${error}`})
    }
})

jobRouter.post("/add",async(req,res)=>{
    const {company,city,location,role,level,contract,position,language} = req.body
    try{
        console.log(req.body)
        const jobPost = new JobModel({company,city,location,role,level,contract,position,language})
        await jobPost.save()
        res.status(200).json({message:"Jop Posted Successfully"})

    }catch(error){
        res.status(400).json({message:`Error while posting job:${error}`})
    }
})


module.exports={
    jobRouter
}