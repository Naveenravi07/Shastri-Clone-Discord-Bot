var express = require('express');
var router = express.Router();
var cmdchema = require("../../schemas/commandschema")
const client = require("../../main")
let helper = require("../../functions/DashboardMainFunctions")

/* GET home page. */
router.get('/', async function (req, res, next) {
  const clientdetails = {
    guilds: client.guilds.cache.size,
    users: client.users.cache.size,
    channels: client.channels.cache.size
  }
  console.log(clientdetails);
  res.render('index', { title: 'Express', clientdetails });

});

router.get('/commands', async (req, res) => {
  let modcmds = await helper.getModCommands()
  let generalcmds = await helper.getGeneralCommands()
  let logcmd = await helper.getLogCommands()
  let funcmd = await helper.getFunCommands()
  let customcmds = await helper.getCustomCmds()
  res.render("commands", { modcmds, generalcmds, logcmd, funcmd, customcmds })
})

module.exports = router;