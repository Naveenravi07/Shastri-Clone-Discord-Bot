const discord = require("discord.js")
const random = require("something-random-on-discord").Random

module.exports = {
    name: "fact",
    description: "send a fact",
    permissions: "everyone",
    usage: ".fact",
    async execute(client, message, message2, args) {
        let data = await random.getFact();
        message.channel.send({ embeds: [data.embed] })
    }
}