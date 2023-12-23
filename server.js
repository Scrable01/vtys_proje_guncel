const express = require('express');
const connectDb = require('./config/dbConnection')
const app = express();
const path = require("path");
const userRoutes = require("./routes/user")
// const adminRoutes = require("./routes/admin")
const bookRoutes = require("./routes/bookRoute")
const movieRoutes = require("./routes/movieRoute")

app.use("/libs", express.static(path.join(__dirname, "node_modules")))
app.use("/views", express.static(path.join(__dirname, "views")))

// app.use(adminRoutes);
app.use(userRoutes);
app.use("/book", bookRoutes)
app.use("/movie", movieRoutes)


app.listen(3000, ()=>{ 
    console.log(`Listening on port 3000`)
})
connectDb()

    