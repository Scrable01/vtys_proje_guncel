const express = require("express")
const router = express.Router()
const { getAllmovies,getmovie } = require("../controller/movieController")

router.route("/").get(getAllmovies)
router.route("/:id").get(getmovie)

module.exports = router