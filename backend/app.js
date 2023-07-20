const express = require("express");
const app = express();
const bookroute = require("./routes/bookroutes");
const bookmodel = require("./models/bookmodel");
const cors = require('cors');
require("./connection/conncetion");
app.use(cors())
app.use(express.json());
app.use("/api/v1/", bookroute);
app.listen(1000, () => {
    console.log("CONNECTED");
});
