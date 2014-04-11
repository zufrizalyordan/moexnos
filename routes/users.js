var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/moexno');

/* GET users listing. */
router.get('/', function(req, res) {
  var collection = db.get('usercollection');

  collection.find({},{},function(e,docs){
    res.render('userlist', {
      title: 'User list',
      "userlist" : docs
    });
  });

});

module.exports = router;
