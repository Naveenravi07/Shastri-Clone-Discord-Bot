const mongoose = require("mongoose")


const welcomechannelschema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    guildname: {
        type: String,
        required: true
    },
    welcomechannel: {
        type: String,
        required: true
    },
   
})
module.exports = mongoose.model('welcomechannels-schema', welcomechannelschema)