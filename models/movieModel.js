const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    Poster_Link: {
        type: String,
        required: [true, "Enter username"]
        
    },
    Series_Title: {
        type: String,
        required: [true, "Enter email"],
        unique: [true]
    },
    Released_Year: {
        type: String,
        required: [true, "Enter password"]
    },

    Runtime: {
        type: String,
        required: [true, "Enter password"]
    },
    Genre: {
        type: String,
        required: [true, "Enter password"]
    },
    IMDB_Rating: {
        type: String,
        required: [true, "Enter password"]
    },
    Overview: {
        type: String,
        required: [true, "Enter password"]
    },
    Meta_score: {
        type: String,
        required: [true, "Enter password"]
    },
    Director: {
        type: String,
        required: [true, "Enter password"]
    },
    Star1: {
        type: String,
        required: [true, "Enter password"]
    },
}, {
    timestamps: true
})

const movieDb = mongoose.model("movie", movieSchema)
module.exports = movieDb