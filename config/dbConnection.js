const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://eneshan034:V8EIv9tqsbQZBOw3@cluster0.8iryqz1.mongodb.net/vtys?retryWrites=true&w=majority')
        console.log("Database connected:",connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDb