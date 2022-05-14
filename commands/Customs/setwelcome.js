let schema=require("../../schemas/welcomechannelschema")

module.exports = {
    name: "setwelcome",
    aliases:["sl"],
    description: "Sets A Custom Welcome Channel For The Guild",

    async execute(client, message, message2, args) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply("You Dont Have The Permission To Set A Custom Welcome Channel")
        } else {
            let cid = message.mentions.channels.first()
            if (!cid) {
                message.reply("Pls Mention A Channel ")
            } else {
                let channel = message.guild.channels.cache.get(cid.id)
                if (!channel) {
                    message.reply("No Channel Found Pls Mention The Channel")
                } else {
                    let channelid = channel.id
                  await  schema.findOneAndUpdate({_id:message.guild.id},{guildname:message.guild.name,welcomechannel:channelid},{upsert:true})
                    message.reply(`Welcome Channel Changed To  <#${channelid}>  `)
                }
            }
        }
    }
}