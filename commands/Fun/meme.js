const discord = require("discord.js")
const random = require("something-random-on-discord").Random

module.exports = {
    name: "meme",
    description: "send a meme",
    permissions: "everyone",
    usage: ".meme",
    async execute(client, message, message2, args) {
        let data = await random.getMeme()
        message.channel.send({ embeds: [data.embed] })
    }
}