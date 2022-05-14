const {MessageEmbed,} = require('discord.js');
module.exports = {
    name: "announce",
    description: "announce a message in an embedd",
    aliases:["say"],
    async execute(client, message, message2, args) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            message.reply("You Do Not Have Permissions To Announce A Message ")

        } else {
            await message.delete()
            let announceembedd=new MessageEmbed()
            announceembedd.setColor('DARK_ORANGE')
            .setTitle("Announcement 📣")
            .setDescription(`${args.join('  ')}`)
            .setAuthor({name: `${message.author.tag}`,
            iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
             url: 'https://naveenravi.com'})
             .setThumbnail('https://images.wondershare.com/filmora/article-images/2021/my-hero-academia-discord.jpg')
            message.channel.send({embeds:[announceembedd]})
           
        }
    }
}
