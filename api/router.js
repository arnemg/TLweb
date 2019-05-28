var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/slurpen';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
let db = mongoose.connection;
//let db;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// GET /cams - the liste over kamera ---------------------------- GET /cams
router.get('/cams', (req, res) => {
  
  db.find().toArray((err, res) => {
    if (err) return console.log(err);
    res.render('cams',res);
  });
});

router.get('/nyCam', function(req, res, next) {
  res.render('nyCam', {page:'nyCam', menuId:'nyCam'});
});


// POST /  ----------------------------------------------------- POST /nyCam
router.post('/nyCam', (req, res) => {
  //const cam = {clickTime: new Date()};
 // db.cams.insert( { Lokasjon: "Sofienbergparken Øst", Ledig: true } )
  console.log('Inne i post nyCam');
  db.cams.save({ Lokasjon: "Sofienbergparken Øst", Ledig: true }, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('Camera added to db');
    console.log(cam);
    res.sendStatus(201);
  });
});










/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Slurpen', menuId:'home'});
});

router.get('/livevideo', function(req, res, next) {
  res.render('livevideo', {page:'Live Video', menuId:'livevideo'});
});




module.exports = router;
