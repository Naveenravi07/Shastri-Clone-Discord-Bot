const { Client } = require("discord.js");
const mongo = require('../dbconnection/dbconnection')
const logschema = require("../schemas/logschemas")
module.exports = {
    getLogCategoryDetails: (Client) => {
        return new Promise(async (resolve, reject) => {

            const cat = Client.channels.cache.find(c => c.name == "SERVERLOGS" && c.type == "GUILD_CATEGORY")
            let result={}
            if (!cat) {
                result.state=false
                resolve(result)
            } else {
                result.id=cat.id
                result.serverid=cat.guildId
                result.name=cat.name
                result.state=true
                resolve(result)
            }
        })
    },
    getLogCategoryDetailsformDb:(message)=>{
        return new Promise(async(resolve,reject)=>{
            let guild=await logschema.findOne({_id:message.guild.id})
            resolve(guild)
        })
    }
  
}

