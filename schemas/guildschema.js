const mongoose = require("mongoose")

const guildschema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    guildname:{
        type:String,
        required:true
    },
    prefix:{
        type:String
    }
})
module.exports = mongoose.model('guild-schema', guildschema)