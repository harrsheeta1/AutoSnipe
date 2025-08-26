import bycrpt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_SECRET } from "../config.js";


// Register new user
export const register=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
             let user=await User.findOne({email});
             if(user)
             {
                return res.status(400).json({message:"User already exists"});
             }
             const hashedpassword=await bycrpt.hash(password,10);
             user=new User({
                username,
                email,
                password:hashedpassword
             });
             await user.save();
             const token=jwt.sign({id:user._id}, JWT_SECRET, {expiresIn:"1h"});
             res.status(201).json({message:"Token created successfully", token});
    }
    catch(err){
        res.status(500).json({message:"Server Error"});
    }
    }