const express = require("express")
const router = express.Router()
const { getAllbooks,getbook } = require("../controller/bookController")

router.route("/").get(getAllbooks)
router.route("/:id").get(getbook)

module.exports = router