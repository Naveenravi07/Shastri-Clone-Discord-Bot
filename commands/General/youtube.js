const { MessageActionRow, MessageButton } = require("discord.js")
module.exports = {
    name: 'youtube',
    description: "This command gives the link of my channel",
    usage:".youtube",
    permissions:"everyone",
    execute(client, message, message2, args) {

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel('Youtube')
                .setURL('https://www.youtube.com/channel/UCvLwJ7jUBLjhqjn8gqvg0jA')
                .setStyle("LINK"),

            new MessageButton()
                .setLabel("Discord")
                .setURL("https://discord.gg/aEpTZeu7")
                .setStyle("LINK")
        )
        message.channel.send({ content: "Youtube Channel Link", components: [row] })
    }
}