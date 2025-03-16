const db = require("../models/users");
const jwt = require("jsonwebtoken");

const saveTransaction = async (obj)=>{
    console.log(" ==============>>>>> "+obj.user_id + " "+obj.amount + " "+obj.type + " "+obj.transactionDate + " "+obj.isRecurring);

    obj.transaction_id = String(Date.now()+Math.floor(Math.random()*1000));
    console.log(" ==============>>>>> "+obj.transaction_id);
    db.transactions.push(obj);
    
}

module.exports = {saveTransaction};