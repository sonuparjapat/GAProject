const exp = require("constants")
const express=require("express")
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")

const {  loginmodel } = require("../Medels/loginModel")
const authRouter=express.Router()
// authrouter
authRouter.post("/register",async(req,res)=>{
    const {email,password,name}=req.body
    const data=await loginmodel.findOne({email})
    if(email&&password&&name){

    
    if(data){
        res.status(400).json({msg:"This User is already registered"})
    }else{
        try{
            bcrypt.hash(password, 5, async(err, hash)=> {
                if(hash&&!err){

                    const data=new loginmodel({email,name,password:hash})
                    await data.save()
                    res.status(200).json({msg:"Registered Successfully"})
                }else{
                    res.status(400).json({msg:err})
                }
                // Store hash in your password DB.
            });
        }catch(err){
res.status(400).json({msg:err})
        }
    }}else{
        res.status(400).json({msg:"Please provide all the required details"})
    }
})
authRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const data=await loginmodel.findOne({email})
    if(email&&password){

    
    if(data){
        try{
            bcrypt.compare(password,data.password, function(err, result) {
               if(result){
                var token = jwt.sign({ userId:data._id }, 'masai');
                
                res.status(200).json({msg:"Login Successfully",useremail:data.email,"token":token,username:data.name})
               }else{
                res.status(400).json({msg:"Wrong Password"})
               }
            });
        }catch(err){
res.status(400).json({msg:err})
        }
    }else{
        res.status(400).json({msg:"Not a Registered User"})
    }}else{
        res.status(400).json({msg:"Please provide all the required details"})
    }
})
module.exports={authRouter}