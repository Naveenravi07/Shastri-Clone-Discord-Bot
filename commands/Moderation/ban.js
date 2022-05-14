const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { clientid, banlogs } = require('../../config.json')
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.commands = new Discord.Collection();

module.exports = {
    name: "ban",
    description: "Bans A Member",
    async execute(client, message, message2, args) {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const member = message.mentions.members.first()
            if (!member) {

                let BanDummyEmbed = new MessageEmbed().setColor('#0099ff').setTitle(`User Does Not Exist 🤖`)
                    .setDescription(`Hey The User Does Not Exist. Make Sure You Have Tagged The Correct One `)
                    .setAuthor({
                        name: 'Naveen 404',
                        iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
                        url: 'https://naveenravi.com'
                    })
                    .setThumbnail(message.author.avatarURL())
                message.channel.send({ embeds: [BanDummyEmbed] }).then(embedMsg => {
                    embedMsg.react("🚶‍♂️")
                })
            } else {

                const mentionedPosition = member.roles.highest.position
                const memberposition = message.member.roles.highest.position

                if (memberposition <= mentionedPosition) {

                    let BanErr = new MessageEmbed().setColor('#0099ff').setTitle(`User Cannot Be Banned 🤖`)
                        .setDescription(`Hey The User You Are Trying To Ban Is Having A Greater Or Equal Role Than You `)
                        .setAuthor({
                            name: 'Naveen 404',
                            iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg'
                        })
                        .setThumbnail(message.author.avatarURL())
                    message.channel.send({ embeds: [BanErr] }).then(embedMsg => {
                        embedMsg.react("🚶‍♂️")
                    })

                } else if (message.mentions.users.first().id === clientid) {
                    let BanErr2 = new MessageEmbed().setColor('#0099ff').setTitle(`Bot Cannot Be Banned 🤖`)
                        .setDescription(`Hey The Bot You Are Trying To Ban Is Having A Greater Or Equal Role Than You `)
                        .setAuthor({
                            name: 'Naveen 404',
                            iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
                            url: 'https://naveenravi.com'
                        })
                        .setThumbnail(message.author.avatarURL())
                    message.channel.send({ embeds: [BanErr2] }).then(embedMsg => {
                        embedMsg.react("🚶‍♂️")
                    })
                }
                else if (memberposition >= memberposition) {
                    const targetId = message.guild.members.cache.get(member.id)
                    targetId.ban()
                    // Embedd Message
                    let authorId = message.author.id
                    let date = new Date()
                    avatarURL = member.avatarURL()
                    let BanEmbed = new MessageEmbed().setColor('#0099ff').setTitle(`User Banned 🤖`)
                        .setDescription(`Hey ${member} Have Been Banned By <@${authorId}> on ${date} `)
                        .setAuthor({
                            name: 'Naveen 404',
                            iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
                            url: 'https://naveenravi.com'
                        })
                        .setThumbnail(member.displayAvatarURL({ format: 'png' }))
                    message.channel.send({ embeds: [BanEmbed] }).then(embedMsg => {
                        embedMsg.react("✅")
                    })

                }
            }

        } else {
            let CantKickDummyEmbed = new MessageEmbed().setColor('#0099ff').setTitle(`User Cannot Be Banned 🤖`)
                .setDescription(`Hey You Cannot Kick This Member. Make Sure You Have  Appropriate Roles `)
                .setAuthor({
                    name: 'Naveen 404',
                    iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
                    url: 'https://naveenravi.com'
                })
                .setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
            message.channel.send({ embeds: [CantKickDummyEmbed] }).then(embedMsg => {
                embedMsg.react("❌")
            })
        }

    }
}
