const mongoose = require("mongoose")

module.exports.connect = uri =>{
    mongoose.connect(uri)
    //global promise library
    mongoose.Promise = global.Promise

    mongoose.connection.on("error", (err)=>{
        console.error("Mongoose Connection Error")
        process.exit(1)
    })

    require('/user')
}