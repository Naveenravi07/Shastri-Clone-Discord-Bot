let cmdschema = require("../schemas/commandschema")
let mongoose = require("mongoose")
const client = require("../main")
module.exports = {
    getModCommands: () => {
        return new Promise(async (resolve, reject) => {
            let cmds = await cmdschema.find({ type: "Moderation" })
            resolve(cmds)
        })
    },
    getLogCommands: () => {
        return new Promise(async (resolve, reject) => {
            let logcmd = await cmdschema.find({ type: "Logging" })
            resolve(logcmd)
        })
    },
    getGeneralCommands: () => {
        return new Promise(async (resolve, reject) => {
            let generalcmds = await cmdschema.find({ type: "General" })
            resolve(generalcmds)
        })
    },
    getFunCommands: () => {
        return new Promise(async (resolve, reject) => {
            let funcmds = await cmdschema.find({ type: "Fun" })
            resolve(funcmds)
        })
    },
    getCustomCmds: () => {
        return new Promise(async (resolve, reject) => {
            let customcmds = await cmdschema.find({ type: "Customs" })
            resolve(customcmds)
        })
    },
    getBotInfos: () => {
        return new Promise(async (resolve, reject) => {
            const clientdetails = {
                guilds: client.guilds.cache.size,
                users: client.users.cache.size,
                channels: client.channels.cache.size
            }
            resolve(clientdetails)
        })
    }
}