require('dotenv').config();
const express = require("express");
const userRouts = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();

app.use(express.json());

app.use("/api/users", userRouts);
app.use("/api/user", transactionRoutes);

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));