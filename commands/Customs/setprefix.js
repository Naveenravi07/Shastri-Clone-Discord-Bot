const { Client } = require("discord.js")
const mongoose = require("mongoose")
const guildschema = require("../../schemas/guildschema")
module.exports = {
    name: "setprefix",
    aliases:["sp"],
    description: "Sets The Custom Prefix For The Guild",
    usage:".setprefix",
    permissions:"Administrator",
    async execute(client, message, message2, args) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply("You Do Not Have Permissions To Set Custom Prefix ❌⛔❌")
        }
        let prefix = args[0]
        if (!prefix) {
            message.reply("Pls provide a prefix")
        } else {
            console.log(prefix);
           await guildschema.findOneAndUpdate({ _id: message.guild.id }, { guildname: message.guild.name, prefix: prefix }, { upsert: true })
           message.reply(` Server Prefix Changed To ${prefix}`)
        }
    }
}