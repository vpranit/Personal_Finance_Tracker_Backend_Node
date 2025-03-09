const db = require("../models/users");
const bcrypt = require("bcrypt");

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

module.exports = {registerUser};