const mongoose = require("mongoose");

let RegisterSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model("Register", RegisterSchema);