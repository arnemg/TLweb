var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Slurpen', menuId:'home'});
});

router.get('/livevideo', function(req, res, next) {
  res.render('livevideo', {page:'Live Video', menuId:'livevideo'});
});

router.get('/solsikka', function(req, res, next) {
  res.render('solsikka', {page:'Solsikka', menuId:'solsikka'});
});

module.exports = router;
