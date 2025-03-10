const db = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (name, email, password) => {
    debugger;
    const exsistinguser = db.users.find(user => user.email === email);
    if(exsistinguser){
        throw new Error("User already exsist");
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = {
        __id: String(Date.now()),
        name,
        email,
        password: hashedpassword
    }
    db.users.push(newUser);
    return { _id: newUser._id, name: newUser.name, email: newUser.email };
}

const loginUser = async (email, password) => {
    const user = db.users.find(user => user.email === email);
    if(!user){
        throw new Error("Invalid email or password");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        throw new Error("Invalid email or password");
    }
    const token = jwt.sign({ _id: user._id, email: user.email},process.env.JWT_SECRET, {expiresIn: "1h"});
    return {token};
}

module.exports = {registerUser, loginUser};