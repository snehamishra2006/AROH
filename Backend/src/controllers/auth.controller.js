import userModel from "../models/user.model.js"
import bcryptjs from "bcryptjs"


export const register = async (req, res){
    
    const {email,contact,password,fullname}= req.body
    
    try{
        const existingUser = await userModel.findOne({
            $or:[
                {email},
                {contact},   
            ]
        })
        if(existingUser){
            return res.status(400).json({message:"User already exist with this email or contact no"})
        }

        //registering user




    } catch(err){
        console.log(error)
        return res.status(500).json({message:"Server error"})

    }

}