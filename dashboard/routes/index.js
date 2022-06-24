var express = require('express');
var router = express.Router();
var cmdchema = require("../../schemas/commandschema")
const client = require("../../main")
let helper = require("../../functions/DashboardMainFunctions")
const axios = require("axios")
const DiscordOauth2 = require("disco-oauth");


let oauthclient = new DiscordOauth2('954419163064049694', 'FxVdCEZiaR0eO5yLRkcDaGWMokezJAkv')
oauthclient.setScopes(['identify', 'guilds'])
oauthclient.setRedirect("http://localhost/login")


  /* GET home page. */
  router.get('/', async function (req, res, next) {
    res.render('index', { title: 'Express' });

  });

router.get('/commands', async (req, res) => {
  let modcmds = await helper.getModCommands()
  let generalcmds = await helper.getGeneralCommands()
  let logcmd = await helper.getLogCommands()
  let funcmd = await helper.getFunCommands()
  let customcmds = await helper.getCustomCmds()
  res.render("commands", { modcmds, generalcmds, logcmd, funcmd, customcmds })
})

router.get("/login", async (req, res) => {
  res.send("heyy")
  let code = req.query.code;
  if (code == undefined) {
    res.send("auth code is undefined")
  } else {
    let userkey = await oauthclient.getAccess(code).catch(console.error)
    res.cookies.set('key', user);
    res.redirect('/user/')
  }
})

router.get('/user/', async (req, res) => {
  let key = req.cookies.get('key')

  if (key) {
    let user = oauthclient.getUser(key)
    console.log(user);
  }
})

module.exports = router;