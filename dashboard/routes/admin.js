var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/home')
});
router.get('/status',async(req,res)=>{
  res.render('admin/status')
})
module.exports = router;
