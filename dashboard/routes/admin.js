var express = require('express');
var router = express.Router();
let helper = require("../../functions/DashboardMainFunctions")
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/home')
});
router.get('/stats', async (req, res) => {
  let clientdetails = await helper.getBotInfos()
  console.log(clientdetails);
  res.render('admin/status', { clientdetails })
})
module.exports = router;
