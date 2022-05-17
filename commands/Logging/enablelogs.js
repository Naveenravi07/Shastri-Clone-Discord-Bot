const { Client, Intents, Message, Guild } = require("discord.js");
const { default: mongoose } = require("mongoose");
const mongo = require('../../dbconnection/dbconnection')
const logschema = require("../../schemas/logschemas")
module.exports = {
  name: "enablelogs",
  aliases:["startlog","el"],
  description: "Creates Logging System For Message Delete",
  usage:".enablelogs",
  permissions:"administrator",
  async execute(client, message, message2, args) {
    return new Promise(async (resolve, reject) => {
      let state = {}
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        message.reply("You Do Not Have Permissions To Use This Command");
        state.perms = false
        resolve(state)
      }
      else {
        const cat = message.guild.channels.cache.find(c => c.name == "SERVERLOGS" && c.type == "GUILD_CATEGORY")
        if (cat) {
          console.log("Category ALready Exists");
          message.reply("Server Log Category Already Exists")
          state.find = true
          resolve(state)
        } else {
          console.log("Logging System Executing ");
          state.find = false
          let newlogcat = await message.guild.channels.create("SERVERLOGS", { type: "GUILD_CATEGORY" });
          let servername = message.guild.name
          servername = servername.toString()
          await logschema.findOneAndUpdate({ _id: message.guild.id }, { categoryid: newlogcat.id ,guildname:servername} ,{ upsert: true })

          message.reply("Server Log Category Created ")
          resolve(state)
        }
      }
    })


  },
};