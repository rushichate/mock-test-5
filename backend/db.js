const mongoose = require("mongoose")
require("dotenv").config()

const serverConnect = mongoose.connect(process.env.mongoURL)

module.exports={
    serverConnect
}