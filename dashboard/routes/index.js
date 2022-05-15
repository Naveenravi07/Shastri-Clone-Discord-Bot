var express = require('express');
var router = express.Router();

const client = require("../../main")

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

module.exports = router;