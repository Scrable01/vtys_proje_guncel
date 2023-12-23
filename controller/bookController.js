const asyncHandler = require("express-async-handler")
const bookDb = require("../models/bookModel")

const getAllbooks = asyncHandler(async (req, res) => {
    const book = await bookDb.find()
    res.status(200).json(book)
})

const getbook = asyncHandler(async (req, res) => {
    const book = await bookDb.findById(req.params.id)
    if (!book) {
        res.status(404)
        throw new Error("Not found")
    }
    res.status(200).json(book)
})

const createbook = asyncHandler(async (req, res) => {
    const { bookTitle, bookAuthor, yearOfPublication } = req.body
    if (!bookTitle || !bookAuthor || !yearOfPublication) {
        res.status(400)
        throw new Error("Fill in the blanks")
    }
    const bookFind = await bookDb.findOne({ bookTitle })
    if (bookFind) {
        res.status(400)
        throw new Error("Already have")
    }
    const book = await bookDb.create({
        bookTitle,
        bookAuthor,
        yearOfPublication
    })
    res.status(201).json(book)
})

const updatebook = asyncHandler(async (req, res) => {
    const book = await bookDb.findById(req.params.id)
    if (!book) {
        res.status(404)
        throw new Error("Not found")
    }
    // if (book.user_id.toString() !== req.user.id) {
    //     res.status(403)
    //     throw new Error("You are not competent")
    // }
    const updatedbook = await bookDb.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedbook)
})

const deletebook = asyncHandler(async (req, res) => {
    const book = await bookDb.findById(req.params.id)
    if (!book) {
        res.status(404)
        throw new Error("Not found")
    }
    // if (book.user_id.toString() !== req.user.id) {
    //     res.status(403)
    //     throw new Error("You are not competent")
    // }
    await bookDb.deleteOne(book)
    res.status(200).json(book)
})

module.exports = {
    getAllbooks,
    getbook,
    createbook,
    updatebook,
    deletebook
}