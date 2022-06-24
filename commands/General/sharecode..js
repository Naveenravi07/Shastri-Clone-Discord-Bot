const { create } = require("sourcebin")
module.exports = {
    name: "sharecode",
    description: "Uploads The Given Code To SourceBin And Gives The Link",
    permissions: "everyone",
    usage: "sharecode",
    aliases: ["sourcebin", "sbin"],

    async execute(client, message, message2, args) {
        const content = args.join("");
        if (!content) {
            message.channel.send("Pls Type The Code To Upload")
        } else {
            try {
                create([
                    {
                        name: "code",
                        content,
                        language: 'javascript',

                    }
                ]).then((value) => {
                    message.channel.send(`Your Code Has Been Uploaded  At ${value.url}`)
                })
            }
            catch (err) {
              return  message.channel.send("There Is A Problem With Source Bin .!!")
            }
        }
    }
}