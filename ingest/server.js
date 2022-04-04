const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Experience = require("./schema");

const server = express();
server.use(express.json());""
server.use(cors());

server.post("/event", async (req, res) => {
    const data = req.body;
    const experience = new Experience(data);
    await experience.save();
    res.send(req.body)
});

mongoose.connect("mongodb://localhost:27017/data1", () => {
    server.listen(3001, () => {
    console.log("SERVER IS RUNNING ON PORT 3001");
}); 
})

