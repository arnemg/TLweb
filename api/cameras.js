const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    var myParam = "Velkommen til TLweb";
    res.render('index', {myParam});
});


router.get('/api', function(req, res, next) {
    var myParam = "Liste over Kamera for TimeLapse ";
    res.render('camera', {myParam});
});

module.exports = router;
