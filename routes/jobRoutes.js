const express = require("express");
const { JobModel } = require("../models/jobmodel");
const jobRoutes = express.Router();

jobRoutes.post("/",async(req,res)=>{
    const payload = req.body;
    try {
        const data = await new JobModel(payload);
        data.save();
        res.status(200).send({"msg":"data submitted successfully"});
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"error occured"});
    }
});

jobRoutes.get("/",async(req,res)=>{
    const query = req.query;
    const skip = (query.page - 1) * 10;

    let obj = {};

    for(let x in query){
      if(x !=="page" && x !== "postedAt"){
        obj[x] = req.query[x];
      }
    }

    try {
        const data = await JobModel.find(obj).skip(skip).limit(10).sort({ postedAt: query.postedAt });
        const total = await JobModel.find(obj).count();
        res.status(200).send({data,total});
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"error occured"});
    }
});

module.exports = {jobRoutes};



// bdsjbssndjndsjks