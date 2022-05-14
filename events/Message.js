const client = require("../main")
let guildschema = require('../schemas/guildschema')
const { defaultprefix } = require("../config.json")
const Discord = require("discord.js")


client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.guild) return



    let configs = await guildschema.findOne({ _id: message.channel.guild.id })

    if (configs) {
        const prefix = configs.prefix

        if (!message.content.startsWith(prefix) || message.author.bot)
            return
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLocaleLowerCase()

        const command2 = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command))
        if (command2) {
            command2.execute(client, message, command2, args)
        }
    } else {
        const prefix = defaultprefix
        if (!message.content.startsWith(prefix) || message.author.bot)
            return
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLocaleLowerCase()
        const command2 = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command))
        if (command2) {
            command2.execute(client, message, command2, args)
        }


    }
})