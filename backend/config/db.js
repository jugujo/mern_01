const mongoose = require('mongoose');
const config = require("config")
const db = config.get('mongoUri')

 const connectDB = async () => {
    try {
         await mongoose.connect(db, {
            useNewUrlParser: true
         });
         console.log("mongoDb connected");
    }catch (err){
        console.log(err.message);
        process.exit(1);
    }
 }

 module.exports = connectDB;
 