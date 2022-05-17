const { Client, Intents, Message, Guild } = require("discord.js");
const { default: mongoose } = require("mongoose");
const mongo = require('../../dbconnection/dbconnection')
const logschema = require("../../schemas/logschemas")
const logDetails = require("../../functions/logcategorydetails")
module.exports = {
    name: "disablelogs",
    aliases:["stoplog","sl"],
    description: "Disables Logging System For Message Delete",
    usage:".disablelogs",
    permissions:"administrator",
    async execute(client, message, message2, args) {


        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply("You Do Not Have Permissions To Use This Command");
        }
        else {
            await logDetails.getLogCategoryDetailsformDb(message).then(async (data) => {
                console.log(data);
                if (!data) return
                let dbcat = message.guild.channels.cache.get(data.categoryid)
                const cat = message.guild.channels.cache.find(c => c.name == "SERVERLOGS" || c.id == data.categoryid && c.type == "GUILD_CATEGORY")
                if (cat || dbcat) {
                    console.log("disabling logs");
                    await logschema.findOneAndDelete({ categoryid: data.categoryid })
                    try {
                        cat.delete()
                        dbcat.default
                    } catch {
                        message.channel.send("An Error Occoured While Deleting Category")
                    }
                    let message2 = message.channel.send("Logs Disabled Successfully")
                } else {
                    message.channel.send("Logs Are Already Disabled In This Server User command ```.enablelogs``` To Start LOgging")
                }
            })
        }

    },
};
