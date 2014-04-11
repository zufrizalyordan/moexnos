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

router.get('/new', function(req, res) {
  res.render('useradd', { title: 'Add New User' });
});

router.post('/send', function(req, res) {
  return function(req, res) {
    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
      "username" : userName,
      "email" : userEmail
    }, function (err, doc) {
      if (err) {
        // If it failed, return error
        res.send("There was a problem adding the information to the database.");
      }
      else {
        // If it worked, set the header so the address bar doesn't still say /useradd
        res.location("userlist");
        // And forward to success page
        res.redirect("/");
      }
    });
  }
});

module.exports = router;
