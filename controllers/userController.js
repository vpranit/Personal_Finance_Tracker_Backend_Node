const userService = require("../services/userService");

const registerUser = async (req,res) => {
  const{name, email, password} = req.body;
  if (!name || !email || !password){
    return res.status(400).json({message: "All fields are required"});
  } 
  try{
    const user = await userService.registerUser(name, email, password);
    return res.status(201).json({message: "User Registered Successfully", user});
  }catch (error){
    return res.status(400).json({message: error.message });
  }
};

const loginUser = async(req,res) => {
  const{email, password} = req.body;
  if(!email || !password){
    return res.status(400).json({message: "All fields are required"});
  }
  try {
    const {token} = await userService.loginUser(email, password);
    return res.status(200).json({message: "User Logged In successfully", token});
  } catch (error) {
    return res.status(401).json({message: error.message})
  }
};

module.exports = {registerUser, loginUser};