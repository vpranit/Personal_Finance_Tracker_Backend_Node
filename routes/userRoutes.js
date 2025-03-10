const express = require("express");
const {registerUser, loginUser} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register",registerUser);
router.post("/login", loginUser);

router.get("/me", authMiddleware, (req, res) => {
    res.send({message: "Accessess granted"  ,user: req.user});
})

module.exports = router;