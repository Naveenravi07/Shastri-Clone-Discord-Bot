const Discord = require("discord.js")
const {Client, Intents} = require('discord.js');
const {MessageEmbed} = require('discord.js');
const {clientid,banlogs,unbanlogchannel}=require('../../config.json')
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
client.commands = new Discord.Collection();

module.exports = {
    name:"unban",
    description:"Unbans a User",

    async execute(client, message, message2, args){
        if(!message.member.permissions.has("BAN_MEMBERS")) {
            let CantUnbanEmbed = new MessageEmbed().setColor('#0099ff').setTitle(`User Cannot Be Unbanned 🤖`)
            .setDescription(`Hey You Cannot Unban. Make Sure You Have  Appropriate Roles `)
            .setAuthor({name: 'Naveen 404',
            iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
             url: 'https://naveenravi.com'})
            .setThumbnail(message.author.displayAvatarURL({format:'png'}))
            message.channel.send({embeds: [CantUnbanEmbed]}).then(embedMsg=>{
                embedMsg.react("❌")
            })
        }
        // if(!message.guild.me.permissons.has("BAN_MEMBERS")) return message.channel.send("I Dont Have Permissions")
      let userId=args[0]
        if(!userId){
            let usernotfound = new MessageEmbed().setColor('#0099ff').setTitle(`User Cannot Be Unbanned 🤖`)
            .setDescription(`Pls Enter The UserId Of The User To Unban `)
            .setAuthor({name: 'Naveen 404',
            iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
             url: 'https://naveenravi.com'})
            .setThumbnail(message.author.displayAvatarURL({format:'png'}))
            message.channel.send({embeds: [usernotfound]}).then(embedMsg=>{
                embedMsg.react("❌")
            })
        }
        else if(userId==message.author.id) {
            let sameUnban = new MessageEmbed().setColor('#0099ff').setTitle(`User Cannot Be Unbanned 🤖`)
            .setDescription(`You cannot Unban Yourself `)
            .setAuthor({name: 'Naveen 404',
            iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
             url: 'https://naveenravi.com'})
            .setThumbnail(message.author.displayAvatarURL({format:'png'}))
            message.channel.send({embeds: [sameUnban]}).then(embedMsg=>{
                embedMsg.react("❌")
            })
        }

        let bans= await message.guild.bans.fetch();
        if(bans.has(userId)){
            message.guild.members.unban(userId)
            let date=new Date()
            let Unbanned = new MessageEmbed().setColor('#0099ff').setTitle(`User  Unbanned 🤖`)
            .setDescription(`<@${userId}> Have Been Unbanned By <@${message.author.id}> On ${date}`)
            .setAuthor({name: 'Naveen 404',
            iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
             url: 'https://naveenravi.com'})
            .setThumbnail(message.author.displayAvatarURL({format:'png'}))
            message.channel.send({embeds: [Unbanned]}).then(embedMsg=>{
                embedMsg.react("❌")
            })
            
        
        }else{
            
            let Notfound = new MessageEmbed().setColor('#0099ff').setTitle(`User  Cannot Be Unbanned 🤖`)
            .setDescription(`User Id Not Found In Ban List. Make Sure You Spelled It Correctly`)
            .setAuthor({name: 'Naveen 404',
            iconURL: 'https://rihebc.com/wp-content/uploads/2021/01/COVER-IMAGE_Digital-Selling-Foundation-Program.jpg',
             url: 'https://naveenravi.com'})
            .setThumbnail(message.author.displayAvatarURL({format:'png'}))
            message.channel.send({embeds: [Notfound]}).then(embedMsg=>{
                embedMsg.react("❌")
            })
        }
    }
}
