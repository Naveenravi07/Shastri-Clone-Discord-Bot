const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { clientid, banlogs, unbanlogchannel } = require('../../config.json')
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.commands = new Discord.Collection();

module.exports = {
    name: "ticket",
    description: "Ticket System For Discord Servers",

    async execute(client, message, message2, args) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.channel.send("You Do Not Have Permissions To Use This Command")
        } else {


            const tcktembedd = new MessageEmbed()
            tcktembedd.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                .setColor("RED")
                .setTitle("Raise A Ticket 💁")
                .setDescription("__*** How to make a ticket ***__\n\n\n" + " > Click on the button below saying  `Create Ticket` \n" +
                    "> Once the ticket is made you will be able to type and ask for support there")
                .setFooter("Ticket By Shastri")
                .setTimestamp()

            const bt = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                    .setCustomId("tic")
                    .setLabel("Create Ticket 📘")
                    .setStyle("PRIMARY")
            )
            message.channel.send({ embeds: [tcktembedd], components: [bt] })
        }
    }
}