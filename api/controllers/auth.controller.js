import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt  from 'jsonwebtoken';
export const signup = async(req,res,next)=>{
 const {username,email,password} = req.body;
 const hashpassword = bcryptjs.hashSync(password,10);
 const newUser = new User({username,email,password :hashpassword});
 try{
  await newUser.save();
  res.status(201).json(" user created successfully");
 }
 catch(err){
  // next(errorHandler(550,'error from the function'));
  next(err);
 }
};
export const signin = async(req,res,next)=>{
  const {username,password} = req.body;
  try {
    const validuser = await User.findOne({username});
    if(!validuser){
      return next(errorHandler(404,'user doesnot exist'));
    }
      const validpassword = bcryptjs.compareSync(password,validuser.password);
      if(!validpassword){
        return next(errorHandler(401,'wrong credentials!!'));
      }
      const token = jwt.sign({id:validuser._id},process.env.JWT_SECRET);
      const {password : pass,...rest} = validuser._doc;
      //save the token as cookie 
      res.cookie('access_token',token,{httpOnly : true,expires:new Date(Date.now()+24*60*60*1000)}).status(200).json(rest);
  } catch (error) {
    next(error);
  }
}
export const google = async (req,res,next) =>{
  try {
    const user = await User.findOne(({email:req.body.email}))
    if(user){
      const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
      const {password : pass,...rest} = user._doc;
      res.cookie('access_token',token,{httpOnly : true}).status(200).json(rest);
    }
    else{
      const generatedPassword = Math.random().toString(36).slice(-8)+ Math.random().toString(36).slice(-8);//16 letter password last 8 digits + last 8 digits
      const hashedpassword = bcryptjs.hashSync(generatedPassword,10);
      const newUser = new User({username : req.body.name.split(" ").join("").toLowerCase()+Math.random().toString(36).slice(-4),email:req.body.email,password : hashedpassword,avatar : req.body.photo});
      await newUser.save();
      const token = jwt.sign({id : newUser._id},process.env.JWT_SECRET);
      const {password : pass,...rest} = newUser._doc;
      res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
        }
  } catch (error) {
    next(error);
  }
};
export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};