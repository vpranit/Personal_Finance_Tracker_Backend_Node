const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const  transactionController = require("../controllers/transactionController");


const router = express.Router();

// Add authMiddleware to the transactions route
router.use("/transactions", authMiddleware);
router.post("/transactions",transactionController.createTransaction);

module.exports = router;
