const mongoose = require("mongoose");
const bookschema = new mongoose.Schema({
    bookname: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    readonline: { type: String },
    price: { type: Number, required: true },
});
module.exports = new mongoose.model("books", bookschema);
