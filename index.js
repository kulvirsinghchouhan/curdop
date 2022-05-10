const express = require("express");


const db = require("./db/conn");
//const dotenv = require("dotenv");

const app = express();
app.use(express.json());
const userreg = require('./routes/user')
app.use('/user',userreg)




app.listen(2200, () => { console.log("server up and running on port 2200") });
