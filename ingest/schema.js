const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExperienceSchema = Schema({
    experienceID: Number,
});

const Experience = mongoose.model("Experience", ExperienceSchema);

module.exports = Experience;