const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: [true, "Enter username"],
        unique: [true]
    },
    bookAuthor: {
        type: String,
        required: [true, "Enter email"]
    },
    yearOfPublication: {
        type: String,
        required: [true, "Enter password"]
    },
    publisher: {
        type: String,
        required: [true, "Enter password"]
    },
    imageUrl: {
        type: String,
        required: [true, "Enter password"]
    },
}, {
    timestamps: true
})

const bookDb = mongoose.model("book", bookSchema)
module.exports = bookDb