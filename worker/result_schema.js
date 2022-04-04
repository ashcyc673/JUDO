const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultSchema = Schema({
    record: {
        key: Number,
        value: Number,
    },
});

const database = mongoose.createConnection("mongodb://localhost:27018/data2");
const Result = database.model("Result", ResultSchema);
module.exports = Result;
