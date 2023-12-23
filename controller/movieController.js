const asyncHandler = require("express-async-handler")
const movieDb = require("../models/movieModel")

const getAllmovies = asyncHandler(async (req, res) => {
    const movie = await movieDb.find().limit(1000)
    res.status(200).json(movie)
})

const getmovie = asyncHandler(async (req, res) => {
    const movie = await movieDb.findById(req.params.id)
    if (!movie) {
        res.status(404)
        throw new Error("Not found")
    }
    res.status(200).json(movie)
})

module.exports = {
    getAllmovies,
    getmovie
}