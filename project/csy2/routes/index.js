var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data=fs.readFileSync('one.txt','utf-8');
    data=data.split(':')[1];
    data++;
  res.render('index', { title: 'Express',data:data });
  fs.writeFile('one.txt','index页面点击次数:'+data)

});

router.get('/a', function(req, res, next) {
  var data=fs.readFileSync('two.txt','utf-8');
  data=data.split(':')[1];
  data++;
  res.render('index', { title: 'Express',data:data });
  fs.writeFile('two.txt','index页面点击次数:'+data)

});
module.exports = router;
