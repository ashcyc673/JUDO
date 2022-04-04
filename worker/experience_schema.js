const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExperienceSchema = Schema({
    experienceID: Number,
});

const database = mongoose.createConnection("mongodb://localhost:27017/data1");
const Experience = database.model("Experience", ExperienceSchema);
module.exports = Experience;
