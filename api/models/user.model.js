import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username : {
      type : String,
      required : true,
      unique :true,
    },
    email:{
      type : String,
      required : true,
      unique : true,
    },
    password:{
      type : String,
      required : true,
    },
    avatar : {
      type : String,
      default : "https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
     },
  },{timestamps : true}
);
const User = mongoose.model('User',userSchema);
export default User;