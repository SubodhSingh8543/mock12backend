const express = require("express");
const { connect } = require("./db");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { jobRoutes } = require("./routes/jobRoutes");


app.use(cors());
app.use(express.json());
app.use("/jobs",jobRoutes);



app.listen(process.env.port, async () => {
    try {
        await connect;
        console.log("connected to db");
    } catch (error) {
        console.log("disconnected from  db");
    }
})