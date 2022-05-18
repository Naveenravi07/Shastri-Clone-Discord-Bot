const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');
const { token, defaultprefix, MONGODB_SRV } = require('./config.json');
const mongo = require("mongoose")
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
});
const fs = require("fs");
let db = require('./dbconnection/dbconnection')
client.commands = new Discord.Collection();
const logDetails = require("./functions/logcategorydetails");
const guildschema = require("./schemas/guildschema");

//Command Handler

['common_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

//Mongo Connection
db.connectDb()

//Bot Status

const activities = [
    "In Development ",
    "Stay Clam  💦 ",
    "theshastri.tk",
    "Dm Shastri#5145"
];

client.once('ready', async () => {

    console.log('Ready! 🚀🚀');
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];
        client.user.setActivity(newActivity, { type: `COMPETING` });
    }, 20000);
})


module.exports = client
client.login(token);
