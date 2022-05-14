const mongoose = require("mongoose")

const logschema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    categoryid: {
        type: String,
        required: true
    },
    guildname:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('category-schema', logschema)