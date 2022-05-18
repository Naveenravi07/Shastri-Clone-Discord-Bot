const discord = require("discord.js")
const random = require("something-random-on-discord").Random
const srod = require("something-random-on-discord").ServerAssistant

module.exports = {
    name: "badword",
    description: "checks any badword in a string",
    permissions: "everyone",
    usage: ".badword",
    async execute(client, message, message2, args) {
        console.log(args)
        srod.checkProfanity(args).then(string => {
            console.log(string)
            //returns  { profanity: true }
        if(string.profanity){
            message.channel.send("Bad Word Found \n\n"+string.result)
        }
        })

    }
}