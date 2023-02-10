const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
    tittle: String,
    completed: Boolean
});

module.exports = mongoose.model("toDo", toDoSchema);