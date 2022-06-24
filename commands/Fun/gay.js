const discord = require("discord.js")
let { MessageEmbed } = require("discord.js")

module.exports = {
    name: "gay",
    description: "Shows the Chance Of Being A Gay",
    permissions: "everyone",
    usage: ".gay @user",
    async execute(client, message, message2, args) {
        const gayguy = message.mentions.users.first()
        if (!gayguy) {
            const gay = Math.floor(Math.random() * 101)
            const gayembed = new MessageEmbed()
            gayembed.setTitle(`Gay Test`)
                .setDescription(`<@${message.member.id}> Is Literally ${gay} % Gay  `)
                .setColor("YELLOW")
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
            message.channel.send({ embeds: [gayembed] })
        } else {

            const gay = Math.floor(Math.random() * 101)
            const gayembed = new MessageEmbed()
            gayembed.setTitle(`Gay Test`)
                .setDescription(`<@${gayguy.id}> Is Literally ${gay} % Gay  `)
                .setColor("YELLOW")
                .setTimestamp()
                .setThumbnail(gayguy.displayAvatarURL({ format: 'png' }))
            message.channel.send({ embeds: [gayembed] })
        }
    }
}