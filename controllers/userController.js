const userService = require("../services/userService");

const registerUser = async (req,res) => {
  const{name, email, password} = req.body;
  if (!name || !email || !password){
    return res.status(400).json({message: "All fields are required"});
  } 
  try{
    const user = await userService.registerUser(name, email, password);
    return res.status(201).json({message: "User Registered Successfully", user});
  }catch (err){
    return res.status(400).json({message: err.message });
  }
};

module.exports = registerUser;