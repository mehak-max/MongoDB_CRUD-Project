// request methods controll here 
import User from "../model/usermodel.js";
import bcrypt from 'bcrypt'
// crud operations 
export const register = async(req,res)=>{
    try{
        const userinfo = req.body;
        const {name, email, password}= userinfo;
        const hashedPassword = await bcrypt.hash(password, 10);
    // user is the model provided by mongooes , make connection with the help of mongooes,
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    res.status(200).json({
        message:"user created successfully",
        user
    })
    }
    catch(error){
        res.status(401).json({
            message: error.message
        })
    }
}   
export const Getuser = async(req, res)=>{
    try{
        const detail =await User.find();
        res.status(200).json({
            message:"user details",
            detail
        })
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
export const updateuser = async(req,res)=>{
    try{
      const {id} = req.params;
      const updateinfo = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, updateinfo);
      res.status(200).json({message:"user updated successfully", updatedUser})

    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
export const deleteuser = async(req, res)=>{
    try{
        const {id}= req.params;
        const deleteuser = await User.findByIdAndDelete(id);
        res.status(200).json({
            message:"user deleted successfully",
            deleteuser
        })
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
// valid email first from req.body (schema gives us a method "find one", then compare password then login)
 export const login = async(req, res)=>{
    try{
        const user = req.body;
        const {email, password} = user;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(401).json({message:"User not found"})
        }
        const isMatch = await bcrypt.compare(password, userExist.password)
        if(!isMatch){
            return res.status(401).json({message:"Invalid credential"})
        }
        res.status(200).json({message:"Login Successful",
            user: userExist
        })
    }
    catch(error){
        res.status(401).json({
            message:"Error logging in user",
            error
        })
    }
}