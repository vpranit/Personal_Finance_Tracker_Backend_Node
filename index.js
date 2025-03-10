require('dotenv').config();
const express = require("express");
const userRouts = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/users", userRouts);

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));