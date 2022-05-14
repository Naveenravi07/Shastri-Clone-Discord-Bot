let {MessageEmbed}=require("discord.js")
module.exports={
    name:"ping",
    description:"Shows The Bot Latency ",

    async execute(client, message, message2, args){
        let msg=message.reply("Calculating Ping 🍭🍭").then(resultmessage=>{
            const ping=resultmessage.createdTimestamp-message.createdTimestamp
            let embed=new MessageEmbed
            embed.setAuthor(`${client.user.username}`)
            .setColor("GREEN")
            .setDescription(`Bot Latency : *** ${ping} ms*** , Api Latency : ***${client.ws.ping} ***` )
            message.reply({embeds:[embed]})
        })
    }
}