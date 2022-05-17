const { glob } = require('glob')
const { promisify } = require('util')
const ascii = require("ascii-table")
const commandschema = require('../schemas/commandschema')
const { default: mongoose, Types } = require('mongoose')
const globPromise = promisify(glob)



module.exports = async (client) => {
    const commandfiles = await globPromise(`${process.cwd()}/commands/**/*.js`)
    commandfiles.map(async(value) => {
        const file = require(value)
        const splitted = value.split('/')
        const directory = splitted[splitted.length - 2]

        if (file.name) {
            const properties = { directory, ...file }
            client.commands.set(file.name, properties)
            console.log(properties);

            await commandschema.deleteMany()
          await  commandschema.findOneAndUpdate(
                {
                    _id:new Types.ObjectId()
                },
                {
                    command: properties.name,
                    usage: properties.usage,
                    description: properties.description,
                    type: properties.directory,
                    perms: properties.permissions

                },
                {
                    upsert: true
                }
            )
        }
    })

    const eventfiles = await globPromise(`${process.cwd()}/events/*.js`)
    eventfiles.map((value) => require(value))
}
