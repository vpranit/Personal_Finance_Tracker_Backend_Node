const transactionService = require("../services/transactionService");

const createTransaction = async (req, res) => {
    const {amount, type, transactionDate, isRecurring} = req.body;
    const user_id = req.user.userid;
    if (!amount || !type || !transactionDate || !isRecurring) {
        return res.status(400).json({message: "All fields are required"});
    }
    try{
        transactionService.saveTransaction({amount, type, transactionDate, isRecurring, user_id});
        return res.status(201).json({message: "Transaction Saved Successfully"});
    }catch (error){
        return res.status(400).json({message: error.message});
    }
}

module.exports = {createTransaction};