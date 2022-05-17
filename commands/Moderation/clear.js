const { MessageEmbed, } = require('discord.js');
const { messagelogchannel } = require('../../config.json')
module.exports = {
    name: 'clear',
    description: "Deletes The Message In A Channel",
    usage:".clear",
    permissions:"manage messages",
    async execute(client, message, message2, args) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            message.reply("You Do Not Have Permissions To Delete Messages")

        } else {
            if (!args[0]) {
                return message.reply("Pls Specify The Amount Of Messages To Delete")
            } else if (isNaN(args[0])) {
                return message.reply("Pls Enter A Valid Number")
            } else if (args[0] > 100) {
                message.reply("You Cant Delete More Than 100 Messages")
            } else if (args[0] < 1) {
                message.reply("You Must Delete At Least One Message")
            } else if (args[0] >= 1) {

                await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                    let DeleteTest = message.channel.bulkDelete(messages, true)
                    if (DeleteTest) {
                        let authorId = message.author.id
                        let noOfMsg = args[0]+1
                        let channelName = message.channel
                        let avatarURL = message.author.avatarURL()
                        let ClearEmbed = new MessageEmbed().setColor('#0099ff').setTitle("Messages Deleted 🤖")
                            .setDescription(`Hey <@${authorId}> Deleted ${noOfMsg} Messages  In<#${channelName.id}>`)
                            .setAuthor({
                                name: 'Naveen 404',
                                iconURL: 'https://images.wondershare.com/filmora/article-images/2021/my-hero-academia-discord.jpg',
                                url: 'https://naveenravi.com'
                            })
                            .setThumbnail(avatarURL)
                        message.channel.send({ embeds: [ClearEmbed] }).then(embedMsg => {
                            embedMsg.react("🥱")
                        })
                    }
                })

            }
        }
    }
}